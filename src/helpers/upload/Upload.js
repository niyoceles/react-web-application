import 'dotenv/config';
import React, { Component } from 'react';
import Dropzone from '../dropzone/Dropzone';
import './Upload.css';
import Progress from '../progress/Progress';
import axios from 'axios';
const {
	REACT_APP_CLOUDINARY_NAME,
	REACT_APP_CLOUDINARY_API_KEY,
	REACT_APP_CLOUDINARY_UPLOAD_PRESET,
} = process.env;

class Upload extends Component {
	constructor(props) {
		super(props);
		this.state = {
			files: [],
			uploading: false,
			uploadProgress: {},
			successfullUploaded: false,
		};

		this.onFilesAdded = this.onFilesAdded.bind(this);
		this.uploadFiles = this.uploadFiles.bind(this);
		this.sendRequest = this.sendRequest.bind(this);
		this.renderActions = this.renderActions.bind(this);
	}

	onFilesAdded(files) {
		this.setState(prevState => ({
			files: prevState.files.concat(files),
		}));
	}

	async uploadFiles() {
		this.setState({ uploadProgress: {}, uploading: true });
		const promises = [];
		this.state.files.forEach(file => {
			promises.push(this.sendRequest(file));
		});
		try {
			await Promise.all(promises);

			this.setState({ successfullUploaded: true, uploading: false });
		} catch (e) {
			// Not Production ready! Do some error handling here instead...
			this.setState({ successfullUploaded: true, uploading: false });
		}
	}

	sendRequest(file) {
		return new Promise((resolve, reject) => {
			const req = new XMLHttpRequest();
			console.log('fileType:', file.type);
			req.upload.addEventListener('progress', event => {
				if (event.lengthComputable) {
					const copy = { ...this.state.uploadProgress };
					copy[file.name] = {
						state: 'pending',
						percentage: (event.loaded / event.total) * 100,
					};
					this.setState({ uploadProgress: copy });
				}
			});

			req.upload.addEventListener('load', event => {
				const copy = { ...this.state.uploadProgress };
				copy[file.name] = { state: 'done', percentage: 100 };
				this.setState({ uploadProgress: copy });
				resolve(req.response);
			});

			req.upload.addEventListener('error', event => {
				const copy = { ...this.state.uploadProgress };
				copy[file.name] = { state: 'error', percentage: 0 };
				this.setState({ uploadProgress: copy });
				reject(req.response);
			});

			const formData = new FormData();
			formData.append('file', file, file.name);
			formData.append('tags', `celestin, image`);
			formData.append('upload_preset', REACT_APP_CLOUDINARY_UPLOAD_PRESET); // Replace the preset name with your own
			formData.append('api_key', REACT_APP_CLOUDINARY_API_KEY); // Replace API key with your own Cloudinary key
			formData.append('timestamp', (Date.now() / 1000) | 0);
			let fileType;
			if (file.type.starWith('video')) {
				return (fileType = 'video');
			}

			if (file.type.starWith('image')) {
				return (fileType = 'image');
			}

      
			req.open(
				'POST',
				`https://api.cloudinary.com/v1_1/${REACT_APP_CLOUDINARY_NAME}/${fileType}/upload`
			);
			req.send(formData);
			return axios
				.post(
					`https://api.cloudinary.com/v1_1/${REACT_APP_CLOUDINARY_NAME}/${fileType}/upload`,
					formData
				)
				.then(response => {
					const data = response.data;
					const fileURL = data.secure_url; // You should store this URL for future
					localStorage.setItem('fileUrl', fileURL);
					console.log(fileURL);
				})
				.catch(error => console.log('Can’t upload ' + error));
		});
	}

	renderProgress(file) {
		const uploadProgress = this.state.uploadProgress[file.name];
		if (this.state.uploading || this.state.successfullUploaded) {
			return (
				<div className='ProgressWrapper'>
					<Progress progress={uploadProgress ? uploadProgress.percentage : 0} />
					<img
						className='CheckIcon'
						alt='done'
						src='baseline-check_circle_outline-24px.svg'
						style={{
							opacity:
								uploadProgress && uploadProgress.state === 'done' ? 0.5 : 0,
						}}
					/>
				</div>
			);
		}
	}

	renderActions() {
		if (this.state.successfullUploaded) {
			return (
				<button
					onClick={() =>
						this.setState({ files: [], successfullUploaded: false })
					}
					className='upload'>
					Clear
				</button>
			);
		} else {
			return (
				<button
					disabled={this.state.files.length < 0 || this.state.uploading}
					onClick={this.uploadFiles}
					className='upload'>
					Upload
				</button>
			);
		}
	}

	render() {
		return (
			<div className='Upload'>
				<span className='Title'>Upload Files</span>
				<div className='Content'>
					<div>
						<Dropzone
							onFilesAdded={this.onFilesAdded}
							disabled={this.state.uploading || this.state.successfullUploaded}
						/>
					</div>
					<div className='Files'>
						{this.state.files.map(file => {
							return (
								<div key={file.name} className='Row'>
									<span className='Filename'>{file.name}</span>
									{this.renderProgress(file)}
								</div>
							);
						})}
					</div>
				</div>
				{this.props.uploadedFile ? (
					<div className='Upload'>
						<img src={this.props.uploadedFile} style={{ width: '80%' }} />
					</div>
				) : null}
				<div className='Actions'>{this.renderActions()}</div>
			</div>
		);
	}
}

export default Upload;

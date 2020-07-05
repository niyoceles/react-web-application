import 'dotenv/config';
import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-inline';
import { ProgressBar } from 'react-bootstrap';
import axios from 'axios';
// import editorConfigs from '../../helpers/ckEditorConfig';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addArticle } from '../../redux/actions';
import AdminLayout from '../../layouts/AdminLayout';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const {
	REACT_APP_CLOUDINARY_NAME,
	REACT_APP_CLOUDINARY_API_KEY,
	REACT_APP_CLOUDINARY_UPLOAD_PRESET,
} = process.env;

class CreateArticle extends Component {
	state = {
		title: '',
		category: '',
		text: '<h1>Add your content</h1>',
		uploadPercentage: 0,
		file: '',
		fileType: 'image',
	};
	handleChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = e => {
		e.preventDefault();

		const { title, category, text, file } = this.state;

		const articleData = {
			title,
			file,
			text,
			category,
		};
		this.props.addArticle(articleData, this.props.history);
	};

	uploadFile = ({ target: { files } }) => {
		let data = new FormData();
		data.append('file', files[0]);
		data.append('tags', `celestin, image`);
		data.append('upload_preset', REACT_APP_CLOUDINARY_UPLOAD_PRESET); // Replace the preset name with your own
		data.append('api_key', REACT_APP_CLOUDINARY_API_KEY); // Replace API key with your own Cloudinary key
		data.append('timestamp', (Date.now() / 1000) | 0);

		let type = files[0].type.split('/');

		if (type[0] === 'video') {
			this.setState({
				fileType: 'video',
			});
		}

		if (type[0] === 'image') {
			this.setState({
				fileType: 'image',
			});
		}

		const options = {
			onUploadProgress: progressEvent => {
				const { loaded, total } = progressEvent;
				let percent = Math.floor((loaded * 100) / total);
				console.log(`${loaded}kb of ${total}kb | ${percent}%`);

				if (percent < 100) {
					this.setState({ uploadPercentage: percent });
				}
			},
		};

		axios
			.post(
				`https://api.cloudinary.com/v1_1/${REACT_APP_CLOUDINARY_NAME}/${this.state.fileType}/upload`,
				data,
				options
			)
			.then(res => {
				console.log('UPLOADED', res.data.url);
				this.setState({ file: res.data.url, uploadPercentage: 100 }, () => {
					setTimeout(() => {
						this.setState({ uploadPercentage: 0 });
					}, 1000);
				});
			});
	};

	render() {
		const { category, title, text, uploadPercentage } = this.state;
		return (
			<AdminLayout>
				<form
					onSubmit={this.handleSubmit}
					style={{ border: '20px solid #fff' }}>
					<p className='h2 text-center mb-8'>Create an article</p>
					<div className='container' style={{ paddingBottom: 25 }}>
						<input
							type='file'
							className='form-control profile-pic-uploader'
							onChange={this.uploadFile}
						/>
						{uploadPercentage > 0 && (
							<ProgressBar
								now={uploadPercentage}
								active
								label={`${uploadPercentage}%`}
							/>
						)}
					</div>
					<div style={{ paddingBottom: 15 }}>
						<h5>Choose category of content</h5>
						<select
							className='browser-default custom-select'
							name='category'
							value={category}
							onChange={this.handleChange}
							required>
							<option value=''>Choose your category</option>
							<option value='1adee4dc94b447a5949feaa6cc7d277e'>
								Written article
							</option>
							<option value='f6b0f561-759b-4b5d-85a3-32b61aa8cde5'>
								Video
							</option>
							<option value='3'>Audio</option>
						</select>
					</div>

					<div className='articleCreationSD'>
						<div className='textContent' style={{ paddingTop: 20 }}>
							<InputGroup>
								<InputGroup.Prepend>
									<InputGroup.Text>Article title</InputGroup.Text>
								</InputGroup.Prepend>
								<FormControl
									as='textarea'
									name='title'
									placeholder='Add title'
									value={title}
									onChange={this.handleChange}
									aria-label='With textarea'
									required
								/>
							</InputGroup>
							<br />
							<br />
							<br />
							<CKEditor
								editor={ClassicEditor}
								data={text}
								onChange={(event, editor) => {
									const data = editor.getData();
									this.setState({ text: data });
								}}
								// config={editorConfigs}
							/>
						</div>
					</div>
					<div className='text-center'>
						<Button color='primary' onClick={this.handleSubmit} type='button'>
							Publish now!
						</Button>
						<br />
					</div>
				</form>
			</AdminLayout>
		);
	}
}

CreateArticle.propTypes = {
	addArticle: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired,
	UI: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	user: state.user,
	UI: state.UI,
});

const mapActionToProps = {
	addArticle,
};

export default connect(mapStateToProps, mapActionToProps)(CreateArticle);

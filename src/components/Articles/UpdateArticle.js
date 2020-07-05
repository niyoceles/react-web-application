import 'dotenv/config';
import React, { Component, Fragment } from 'react';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-inline';
import Skeleton from 'react-loading-skeleton';
// import editorConfigs from '../../helpers/ckEditorConfig';
import { ProgressBar } from 'react-bootstrap';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateArticle } from '../../redux/actions';
const {
	REACT_APP_CLOUDINARY_NAME,
	REACT_APP_CLOUDINARY_API_KEY,
	REACT_APP_CLOUDINARY_UPLOAD_PRESET,
} = process.env;

class UpdateArticle extends Component {
	state = {
		title: this.props.articleName,
		category: this.props.category,
		file: this.props.contentFile,
		text: this.props.contentText,
		fileType: 'image',
	};

	handleOpen = () => {
		this.setState({ open: true });
	};
	handleClose = () => {
		this.setState({ open: false });
	};

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = e => {
		e.preventDefault();
		const { title, category, text, file } = this.state;

		const articleData = {
			id: this.props.articleId,
			title,
			category,
			file,
			text,
		};
		this.props.updateArticle(articleData, this.props.history);
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
		const { open, category, title, text, uploadPercentage } = this.state;
		return (
			<Fragment>
				<a
					href={() => false}
					onClick={this.handleOpen}
					className='btn btn-primary btn-sm mr-2 small'>
					<i className='fa fa-edit'></i>
				</a>
				<Modal show={open} onHide={this.handleClose} size='lg'>
					<Modal.Header closeButton>
						<Modal.Title id='contained-modal-title-vcenter'>
							Update an article
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form onSubmit={this.handleSubmit}>
							<div className='container'>
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
								)}{' '}
								{!this.props.contentFile ? (
									<Skeleton count={15} duration={2} />
								) : (
									<iframe
										src={`${this.props.contentFile}?auto=compress&cs=tinysrgb&dpr=1&w=500`}
										frameBorder='0'
										scrolling='no'
										title={title}
										autoplay='false'
										style={{
											width: '100%',
											height: '500px',
											overflow: 'hidden',
										}}></iframe>
								)}
							</div>
							<div style={{ paddingBottom: 15 }}>
								<h5>Choose category of content</h5>
								<select
									className='browser-default custom-select'
									name='category'
									value={category}
									onChange={this.handleChange}>
									<option value={category}>{category}</option>
									<option value='1adee4dc94b447a5949feaa6cc7d277e'>
										Written article
									</option>
									<option value='2'>Video</option>
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
											value={title}
											onChange={this.handleChange}
											aria-label='With textarea'
										/>
									</InputGroup>
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
						</form>
					</Modal.Body>
					<Modal.Footer>
						<Button color='secondary' onClick={this.handleClose}>
							Close
						</Button>
						<Button color='primary' onClick={this.handleSubmit}>
							Save changes
						</Button>
					</Modal.Footer>
				</Modal>
			</Fragment>
		);
	}
}

UpdateArticle.propTypes = {
	updateArticle: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired,
	UI: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	user: state.user,
	UI: state.UI,
});

const mapActionToProps = {
	updateArticle,
};

export default connect(mapStateToProps, mapActionToProps)(UpdateArticle);

import 'dotenv/config';
import React, { Component, Fragment } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-inline';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addArticle } from '../../redux/actions';
import Upload from '../../helpers/upload/Upload';
import AdminLayout from '../../layouts/AdminLayout';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
class CreateArticle extends Component {
	state = {
		title: '',
		category: '',
		text: '<h1>Add your content</h1>',
		selectedFile: localStorage.getItem('fileUrl'),
	};
	handleChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = e => {
		e.preventDefault();
		const { title, category, text, selectedFile } = this.state;
		const articleData = {
			title,
			file: selectedFile,
			text,
			category,
		};
		this.props.addArticle(articleData, this.props.history);
		localStorage.removeItem('fileUrl');
	};

	render() {
		const { category, title, text, selectedFile } = this.state;
		return (
			<AdminLayout>
				<form onSubmit={this.handleSubmit} style={{border: '20px solid #fff'}}>
					<p className='h2 text-center mb-8'>Create an article</p>
					<div className='container'>
						<Upload />
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
									placeholder='Add title'
									value={title}
									onChange={this.handleChange}
									aria-label='With textarea'
									required
								/>
							</InputGroup>
							<br/>
							<br/>
							<br/>
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
						<Button color="primary" onClick={this.handleSubmit}type='button'>
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

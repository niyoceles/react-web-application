import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addComment } from '../../redux/actions';

class AddComment extends Component {
	state = {
		name: '',
		email: '',
		message: '',
		showAddComment: false,
	};

	handleOpen = () => {
		this.setState({ showAddComment: true });
	};
	handleClose = () => {
		this.setState({ showAddComment: false });
	};

	handleAddComment = event => {
		event.preventDefault();
		const { name, email, message } = this.state;
		const commentData = {
			name,
			email,
			message,
			article: this.props.articleId,
		};
		this.props.addComment(commentData);
		this.setState({
			name: '',
			email: '',
			message: '',
		});
	};

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	render() {
		const { showAddComment, email, name, message } = this.state;
		const { comment } = this.props.article;
		const commentEmail = comment && comment.map(i => i.email).toString();
		return (
			<Fragment>
				<Button
					variant='primary'
					onClick={this.handleOpen}
					type='button'
					style={{ display: showAddComment ? 'none' : 'block' }}
					className='col-sm-6 btn-block float-left'>
					Add your comment
				</Button>
				<div
					class='alert alert-success text-center'
					role='alert'
					style={{ display: commentEmail ? 'block' : 'none' }}>
					your commented successful submited!
				</div>
				<Form
					className='p-5 box'
					onSubmit={this.handleAddComment}
					style={{ display: showAddComment ? 'block' : 'none' }}>
					<p className='text-center small mb-4'>Add your comment</p>
					<Form.Group>
						<Form.Label>Add Full name</Form.Label>
						<Form.Control
							type='text'
							name='name'
							placeholder='Full name'
							value={name}
							onChange={this.handleChange}
							required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type='email'
							name='email'
							placeholder='Enter email'
							value={email}
							onChange={this.handleChange}
							required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>your comment</Form.Label>
						<Form.Control
							name='message'
							as='textarea'
							rows='3'
							placeholder='Add your comment here'
							value={message}
							onChange={this.handleChange}
							required
						/>
					</Form.Group>
					<Button
						variant='primary'
						type='submit'
						className='col-sm-4 btn-block float-right'>
						Add comment
					</Button>
				</Form>
			</Fragment>
		);
	}
}

AddComment.propTypes = {
	addComment: PropTypes.func.isRequired,
	articleId: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
	article: state.article,
});

export default connect(mapStateToProps, { addComment })(AddComment);

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { connect } from 'react-redux';
import { deleteArticle } from '../../redux/actions';

class DeleteArticle extends Component {
	state = {
		open: false,
	};

	handleOpen = () => {
		this.setState({ open: true });
	};
	handleClose = () => {
		this.setState({ open: false });
	};

	deleteArticle = () => {
		const deleteData = { id: this.props.articleId };
		this.props.deleteArticle(deleteData);
		this.setState({ open: false });
	};
	render() {
		return (
			<Fragment>
				<a
					href={() => false}
					onClick={this.handleOpen}
					className='btn btn-danger btn-sm small'>
					<i className='fa fa-trash'></i>
				</a>
				<Modal show={this.state.open} onHide={this.handleClose} size='lg'>
					<Modal.Header closeButton>
						<Modal.Title id='contained-modal-title-vcenter'>
							Delete article
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h4>Are you sure to delete this article</h4>
						Article name: {this.props.articleName} <br />
						Written by:{this.props.userNames}
					</Modal.Body>
					<Modal.Footer>
						<Button color='secondary' onClick={this.handleClose}>
							Close
						</Button>
						<Button color='primary' onClick={this.deleteArticle}>
							Save changes
						</Button>
					</Modal.Footer>
				</Modal>
			</Fragment>
		);
	}
}

DeleteArticle.propTypes = {
	deleteArticle: PropTypes.func.isRequired,
	articleId: PropTypes.number.isRequired,
};

export default connect(null, { deleteArticle })(DeleteArticle);

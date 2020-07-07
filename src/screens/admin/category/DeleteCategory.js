import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { connect } from 'react-redux';
import { deleteCategory } from '../../../redux/actions';

class DeleteCategory extends Component {
	state = {
		open: false,
	};

	handleOpen = () => {
		this.setState({ open: true });
	};
	handleClose = () => {
		this.setState({ open: false });
	};

	deleteCategory = () => {
		const deleteData = { id: this.props.categoryId };
		this.props.deleteCategory(deleteData);
		this.setState({ open: false });
	};

	// refreshPage = () => {
	// 	window.location.reload(false);
	// };

	render() {
		// console.log('categoryDelete:', this.props.article.category)
		// if (this.props.article.category.id === this.props.categoryId) {
		// 	this.refreshPage();
		// }
		return (
			<Fragment>
				<a
					href={() => false}
					onClick={this.handleOpen}
					className='btn btn-danger btn-sm small'>
					<i className='fa fa-trash'></i>
				</a>
				<Modal show={this.state.open} onHide={this.handleClose} size='md'>
					<Modal.Header closeButton>
						<Modal.Title id='contained-modal-title-vcenter'>
							Delete Category
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h4>Are you sure to delete this category</h4>
						Category name: {this.props.categoryName}
					</Modal.Body>
					<Modal.Footer>
						<Button color='secondary' onClick={this.handleClose}>
							Close
						</Button>
						<Button color='primary' onClick={this.deleteCategory}>
							Save changes
						</Button>
					</Modal.Footer>
				</Modal>
			</Fragment>
		);
	}
}

DeleteCategory.propTypes = {
	deleteCategory: PropTypes.func.isRequired,
	categoryId: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
	article: state.article,
});
export default connect(mapStateToProps, { deleteCategory })(DeleteCategory);

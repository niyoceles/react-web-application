import 'dotenv/config';
import React, { Component, Fragment } from 'react';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { updateCategory } from '../../../redux/actions';

class UpdateCategory extends Component {
	state = {
		name: this.props.categoryName,
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
		const { name } = this.state;

		const categoryData = {
			id: this.props.categoryId,
			name,
		};
		this.props.updateCategory(categoryData);
		this.setState({ open: false });
	};

	refreshPage = () => {
		window.location.reload(false);
	};

	render() {
		const { open, name } = this.state;
		if (this.props.article.category.id === this.props.categoryId) {
			this.refreshPage();
		}
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
							Update category
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form onSubmit={this.handleSubmit}>
							<div className='categoryCreationSD'>
								<div className='textContent' style={{ paddingTop: 20 }}>
									<InputGroup>
										<InputGroup.Prepend>
											<InputGroup.Text>category name</InputGroup.Text>
										</InputGroup.Prepend>
										<FormControl
											type='text'
											name='name'
											size='lg'
											value={name}
											onChange={this.handleChange}
										/>
									</InputGroup>
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

UpdateCategory.propTypes = {
	updateCategory: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired,
	UI: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	article: state.article,
});

const mapActionToProps = {
	updateCategory,
};

export default connect(mapStateToProps, mapActionToProps)(UpdateCategory);

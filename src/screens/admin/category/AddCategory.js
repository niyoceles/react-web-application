import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import { connect } from 'react-redux';
import { addCategory } from '../../../redux/actions';

class AddCategory extends Component {
	state = {
		name: '',
		open: false,
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

	handleSubmit = () => {
		const newData = {
			name:this.state.name
		};
		this.props.addCategory(newData);
		this.setState({ open: false });
	};
	render() {
		const { name } = this.state;
		return (
			<Fragment>
				<Button
					variant='primary btn-block mb-2'
					onClick={this.handleOpen}
					className='mr-2'>
					Add New
				</Button>
				<Modal show={this.state.open} onHide={this.handleClose} size='md'>
					<Modal.Header closeButton>
						<Modal.Title id='contained-modal-title-vcenter'>
							Add Category
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<InputGroup>
							<InputGroup.Prepend>
								<InputGroup.Text>category name</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl
								as='input'
								name='name'
								size='lg'
								value={name}
								onChange={this.handleChange}
							/>
						</InputGroup>
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

AddCategory.propTypes = {
	addCategory: PropTypes.func.isRequired,
	categoryId: PropTypes.number.isRequired,
};

export default connect(null, { addCategory })(AddCategory);

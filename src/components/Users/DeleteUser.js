import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
	MDBRow,
	MDBBtn,
	MDBModal,
	MDBModalBody,
	MDBModalHeader,
	MDBModalFooter,
	MDBIcon,
} from 'mdbreact';

import { connect } from 'react-redux';
import { deleteUser } from '../../redux/actions';

class DeleteUser extends Component {
	state = {
		open: false,
	};

	handleOpen = () => {
		this.setState({ open: true });
	};
	handleClose = () => {
		this.setState({ open: false });
	};

	deleteUser = () => {
		this.props.deleteUser(this.props.articleId);
		this.setState({ open: false });
	};
	render() {

		return (
			<Fragment>
				<MDBBtn rounded outline size='sm' onClick={this.handleOpen}>
					<MDBIcon far icon='trash-alt' className='red-text pr-3' />
				</MDBBtn>
				<MDBModal isOpen={this.state.open} toggle={this.handleClose} size='lg'>
					<MDBModalHeader toggle={this.handleClose}>
						Are you sure you want to delete this star?
					</MDBModalHeader>
					<MDBModalBody>
						<MDBRow>
							User name: {this.props.userNames} <br />
							User Coordinates:{this.props.contextText}
						</MDBRow>
					</MDBModalBody>
					<MDBModalFooter>
						<MDBBtn color='secondary' onClick={this.handleClose}>
							Close
						</MDBBtn>
						<MDBBtn color='primary' onClick={this.deleteUser}>
							Save changes
						</MDBBtn>
					</MDBModalFooter>
				</MDBModal>
			</Fragment>
		);
	}
}

DeleteUser.propTypes = {
	deleteUser: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired,
	articleId: PropTypes.number.isRequired,
};

export default connect(null, { deleteUser })(DeleteUser);

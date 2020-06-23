import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// Redux stuff
import { connect } from 'react-redux';
import { updateUser } from '../../redux/actions';
import Validator from '../../utils/inputValidation';
import {
	MDBRow,
	MDBBtn,
	MDBIcon,
	MDBModal,
	MDBInput,
	MDBModalBody,
	MDBModalHeader,
	MDBModalFooter,
} from 'mdbreact';
// Icons

class UpdateUser extends Component {
	state = {
		plain_orders_star_name: this.props.userNames,
		plain_orders_hidden_coordinates: this.props.contextText,
		plain_orders_hidden_id_constellation: this.props.starConstellation,
		open: false,
	};

	handleOpen = () => {
		this.setState({ open: true });
	};
	handleClose = () => {
		this.setState({ open: false });
	};

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};
	handleSubmit = () => {
		const {
			plain_orders_star_name,
			plain_orders_hidden_coordinates,
			plain_orders_hidden_id_constellation,
		} = this.state;

		this.clearErrors();
		const userNamesError = Validator.validUserupdateUserName({
			plain_orders_star_name,
		});
		const contextTextError = Validator.validateContextText({
			plain_orders_hidden_coordinates,
		});
		const starConstellationError = Validator.validateStarIdConstellation({
			plain_orders_hidden_id_constellation,
		});
		if (userNamesError) {
			return this.displayError(userNamesError, 'userNamesError');
		}
		if (contextTextError) {
			return this.displayError(contextTextError, 'contextTextError');
		}
		if (starConstellationError) {
			return this.displayError(
				starConstellationError,
				'starConstellationError'
			);
		}

		const updatedData = {
			plain_orders_star_name,
			plain_orders_hidden_coordinates,
			plain_orders_hidden_id_constellation,
		};
		this.props.updateStar(this.props.articleId, updatedData);
		this.handleClose();
	};

	displayError = (error, key) => {
		this.setState({ [key]: error });
	};

	clearErrors = () =>
		this.setState(prevState => ({
			...prevState,
			userNamesError: '',
			contextTextError: '',
			starConstellationError: '',
		}));

	render() {
		const {
			plain_orders_star_name,
			plain_orders_hidden_coordinates,
			plain_orders_hidden_id_constellation,
			userNamesError,
			contextTextError,
			starConstellationError,
			open,
		} = this.state;
		return (
			<Fragment>
				<MDBBtn rounded outline size='sm' onClick={this.handleOpen}>
					<MDBIcon icon='edit' className='indigo-text pr-3' />
				</MDBBtn>
				<MDBModal isOpen={this.state.open} toggle={this.handleClose} size='lg'>
					<MDBModalHeader toggle={this.handleClose}>
						Edit your details
					</MDBModalHeader>
					<MDBModalBody>
						<MDBRow>
							<MDBInput
								id='confirmEmail'
								name='plain_orders_star_name'
								label='Update User'
								icon='user'
								group
								validate
								type='text'
								error='wrong'
								success='right'
								value={plain_orders_star_name}
								onChange={this.handleChange}
								required
							/>
							<MDBInput
								id='confirmEmail'
								name='plain_orders_star_name'
								label='Update User'
								icon='email'
								group
								validate
								type='text'
								error='wrong'
								success='right'
								value={plain_orders_hidden_coordinates}
								onChange={this.handleChange}
								required
							/>
						</MDBRow>
					</MDBModalBody>
					<MDBModalFooter>
						<MDBBtn color='secondary' onClick={this.handleClose}>
							Close
						</MDBBtn>
						<MDBBtn color='primary' onClick={this.handleSubmit}>
							Update
						</MDBBtn>
					</MDBModalFooter>
				</MDBModal>
			</Fragment>
		);
	}
}

UpdateUser.propTypes = {
	updateUser: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
	UI: state.UI,
});

export default connect(mapStateToProps, { updateUser })(UpdateUser);

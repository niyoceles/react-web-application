import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import Validator from '../../../utils/validation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createAccountPassword } from '../../../redux/actions';

import { AuthLayout } from '../../../layouts';

class SetPasswordScreen extends Component {
	state = {
		password: '',
		confirmPassword: '',
		passwordError: '',
		confirmPasswordError: '',
		errors: {},
	};
	handleChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
		this.clearErrors();
	};

	handleSubmit = e => {
		e.preventDefault();
		const { password } = this.state;

		const passwordError = Validator.validatePassword({ password });
		if (passwordError) {
			return this.displayError(passwordError, 'passwordError');
		}

		const firstPassword = document.getElementById('password').value;
		const confirmPassword = document.getElementById('confirmPassword').value;

		const confirmPasswordError = firstPassword !== confirmPassword;

		if (confirmPasswordError) {
			return this.displayError(confirmPasswordError, 'confirmPasswordError');
		}
		// const token = window.location.search.substring(1);
		const token = 'uZJjmkd6cRQ0hVrXaHblFmFMg6lXxGIH';
		const resetPwdData = {
			hash: token,
			password,
			confirm_password: password,
		};
		this.props.createAccountPassword(resetPwdData, this.props.history);
	};

	displayError = (error, key) => {
		this.setState({ [key]: error });
	};

	clearErrors = () =>
		this.setState(prevState => ({
			...prevState,
			passwordError: '',
			confirmPasswordError: '',
		}));

	render() {
		const {
			passwordError,
			password,
			confirmPasswordError,
			confirmPassword,
		} = this.state;
		return (
			<AuthLayout>
				<Form className='p-5 box'>
					<p className='text-center small mb-4'>Set My New Password Account</p>
					<Form.Group>
						<Form.Label>New Password</Form.Label>
						<Form.Control
							id='password'
							type='password'
							name='password'
							placeholder='New password'
							value={password}
							onChange={this.handleChange}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control
							id='confirmPassword'
							type='password'
							name='confirmPassword'
							placeholder='Confirm password'
							value={confirmPassword}
							onChange={this.handleChange}
						/>
					</Form.Group>
					<div>
						{confirmPasswordError ? (
							<div className='error'>Password Not match!</div>
						) : (
							false
						)}
						{passwordError && <div className='error'>{passwordError}</div>}
					</div>
					<Button
						variant='primary'
						type='submit'
						className='col-sm-12 btn-block mb-1 mt-1'
						onClick={this.handleSubmit}>
						Save password
					</Button>
				</Form>
			</AuthLayout>
		);
	}
}

SetPasswordScreen.propTypes = {
	createAccountPassword: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired,
	UI: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	user: state.user,
	UI: state.UI,
});

export default connect(mapStateToProps, { createAccountPassword })(
	SetPasswordScreen
);

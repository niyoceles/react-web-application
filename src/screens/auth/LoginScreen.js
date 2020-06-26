import React, { Component } from 'react';
import { Row, Container, Col, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { AuthLayout } from '../../layouts';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions';

class LoginScreen extends Component {
	state = {
		email: '',
		password: '',
		errors: {},
	};

	static getDerivedStateFromProps(props) {
		if (props.UI.errors) {
			return { errors: props.UI.errors };
		}
	}

	handleSignin = event => {
		event.preventDefault();
		const userData = {
			email: this.state.email,
			password: this.state.password,
		};
		console.log(userData);
		//from action
		this.props.loginUser(userData, this.props.history);
	};

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	render() {
		return (
			<AuthLayout>
				<Form className='p-5 box' onSubmit={this.handleSignin}>
					<p className='text-center small mb-4'>
						Sign In To Access Your Account
					</p>
					<Form.Group>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type='email'
							name='email'
							placeholder='Enter email'
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							name='password'
							placeholder='********'
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</Form.Group>
					<a href='/password/forgot'>Forgot Password ?</a>
					<Button
						variant='primary'
						type='submit'
						className='col-sm-4 btn-block float-right'>
						Sign In
					</Button>
				</Form>
			</AuthLayout>
		);
	}
}

LoginScreen.propTypes = {
	loginUser: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired,
	UI: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	user: state.user,
	UI: state.UI,
});

const mapActionToProps = {
	loginUser,
};

export default connect(mapStateToProps, mapActionToProps)(LoginScreen);

import React from 'react';
import { Row, Container, Col, Form, Button } from 'react-bootstrap';

import { AuthLayout } from '../../layouts';

export class LoginScreen extends React.Component
{
	render() {
		return (
			<AuthLayout>
				<Form className="p-5 box">
					<p className="text-center small mb-4">Sign In To Access Your Account</p>
					<Form.Group>
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>
					<Form.Group>
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="********" />
					</Form.Group>
					<a href="/password/forgot">Forgot Password ?</a>
					<Button variant="primary" type="submit" className="col-sm-4 btn-block float-right">Sign In</Button>
				</Form>
			</AuthLayout>
		);
	}
}
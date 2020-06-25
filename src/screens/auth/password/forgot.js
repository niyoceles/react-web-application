import React from 'react';
import { Row, Container, Col, Form, Button } from 'react-bootstrap';

import { AuthLayout } from '../../../layouts';

export class ForgotPasswordScreen extends React.Component
{
	render() {
		return (
			<AuthLayout>
				<Form className="p-5 box">
					<p className="text-center small mb-4">Forgot My Password</p>
					<Form.Group className="mt-4">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="email@gmail.com" />
					</Form.Group>
					<a href="/login">Go Back To Login</a>
					<Button variant="primary" type="submit" className="col-sm-4 btn-block float-right">Send</Button>
				</Form>
			</AuthLayout>
		);
	}
}
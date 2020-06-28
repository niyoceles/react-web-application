import React from 'react';
import { Form, Button } from 'react-bootstrap';

import { AuthLayout } from '../../../layouts';

export class ResetPasswordScreen extends React.Component {
	render() {
		return (
			<AuthLayout>
				<Form className='p-5 box'>
					<p className='text-center small mb-4'>Reset My Password Account</p>
					<Form.Group>
						<Form.Label>New Password</Form.Label>
						<Form.Control type='password' placeholder='********' />
					</Form.Group>
					<Form.Group>
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control type='password' placeholder='********' />
					</Form.Group>
					<Button
						variant='primary'
						type='submit'
						className='col-sm-12 btn-block mb-1 mt-1'>
						Save
					</Button>
				</Form>
			</AuthLayout>
		);
	}
}

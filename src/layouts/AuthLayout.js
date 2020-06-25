import React from 'react'
import { Row, Container, Col } from 'react-bootstrap';

import './css/auth.css';

export class AuthLayout extends React.Component
{
	render() {
		return (
			<div className="auth-layout">
				<Container>
					<Row className="justify-content-center p-5">
						<Col sm={5}>
							<h2 className="mt-5 mb-3 text-center"><b>NU</b>RC</h2>
							{ this.props.children }
						</Col>
					</Row>
					<p className="text-center grey-text">Copyright &copy; 2020. Rwanda NURC</p>
				</Container>
			</div>
		);
	}
}

export default AuthLayout
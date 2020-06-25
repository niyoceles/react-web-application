import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

import './css/admin.css';

class AdminLayout extends React.Component
{
	render() {
		return (
			<div className="admin-layout">
				<header>
					<Navbar sticky="top" expand="lg" variant="light" bg="light">
		                <Container>
		                    <Navbar.Toggle aria-controls="navBarMenu" />
		                    <Navbar.Brand href="/dashboard">NURC</Navbar.Brand>
		                    <Navbar.Collapse id="navBarMenu">
		                        <Nav className="ml-auto">
		                        	<NavDropdown title="NIYITEGEKA Honore">
		                                <NavDropdown.Item href="/">Password</NavDropdown.Item>
		                                <NavDropdown.Item href="/">Profile</NavDropdown.Item>
		                                <NavDropdown.Item href="/">Sign Out</NavDropdown.Item>
		                            </NavDropdown>
		                        </Nav>
		                    </Navbar.Collapse>
		                </Container>
		            </Navbar>
				</header>

				<main className="admin-body p-5">
					<Container>
						{ this.props.children }
					</Container>
				</main>

				<footer>
					<Container>
						<p className="text-center grey-text">Copyright &copy; 2020. Rwanda NURC</p>
					</Container>
				</footer>
			</div>
		);
	}
}

export default AdminLayout;
import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

import './css/app.css';

class AppLayout extends React.Component
{
	render() {
		return (
			<div className="admin-layout">
				<header>
					<Navbar className="sticky-top" expand="lg" variant="light" bg="light">
		                <Container>
		                    <Navbar.Toggle aria-controls="navBarMenu" />
		                    <Navbar.Brand href="/dashboard">NURC</Navbar.Brand>
		                    <Navbar.Collapse id="navBarMenu">
		                        <Nav className="ml-auto">
		                        	<NavDropdown title={
		                        		<span className="mr-2"><i class="fa fa-home"></i></span>} noCaret>

		                                <NavDropdown.Item href="/category/article">Article</NavDropdown.Item>
		                                <NavDropdown.Item href="/category/video">Video</NavDropdown.Item>
		                                <NavDropdown.Item href="/category/document">Document</NavDropdown.Item>
		                            </NavDropdown>
		                        </Nav>
		                    </Navbar.Collapse>
		                </Container>
		            </Navbar>
				</header>

				<main className="app-body">
					{ this.props.children }
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

export default AppLayout;
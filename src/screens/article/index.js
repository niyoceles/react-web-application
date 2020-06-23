import React from 'react';
import { Row, Container, Col, Button, ButtonGroup, Table, Dropdown } from 'react-bootstrap';

import { AdminLayout } from '../../layouts';

export class ArticleScreen extends React.Component
{
	render() {
		return (
			<AdminLayout>
				<Row>
					<Col sm={8}>
						<h4>Article</h4>
					</Col>
                    <Col sm={2}>
                        <Button variant="primary btn-block mb-2" className="mr-2">Add New</Button>
                    </Col>
                    <Col sm={2}>
                        <Button href="/dashboard" variant="secondary btn-block mb-2">Go back</Button>
                    </Col>
				</Row>
				<Row className="admin-box mt-4">
					<Table responsive borderless striped hover>
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Posted By</th>
                                <th>Status</th>
                                <th>Published</th>
                                <th>Description</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array(20).fill(1).map((el, i) =>
                                <tr>
                                    <td>{ i + 1 }</td>
                                    <td></td>
                                    <td>Article title</td>
                                    <td>Article</td>
                                    <td>Niyitegeka Honore</td>
                                    <td>Disabled</td>
                                    <td>Jun, 10 2020</td>
                                    <td>Description</td>
                                    <td>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" className="btn-sm" id="dropdown-basic">
                                                Action
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#">View</Dropdown.Item>
                                                <Dropdown.Item href="#">Edit</Dropdown.Item>
                                                <Dropdown.Item href="#">Enable / Disale</Dropdown.Item>
                                                <Dropdown.Item href="#">Delete</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
				</Row>
			</AdminLayout>
		);
	}
}
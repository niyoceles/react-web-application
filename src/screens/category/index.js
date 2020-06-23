import React from 'react';
import { Row, Container, Col, Button, Table } from 'react-bootstrap';

import { AdminLayout } from '../../layouts';

export class CategoryScreen extends React.Component
{
	render() {
		return (
			<AdminLayout>
				<Row>
					<Col sm={8}>
						<h4>Category</h4>
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
                                <th className="text-center">#</th>
                                <th>Name</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array(20).fill(1).map((el, i) =>
                                <tr>
                                    <td className="text-center">{ i + 1 }</td>
                                    <td>Article</td>
                                    <td>
                                        <a href="" className="btn btn-primary btn-sm mr-2 small"><i class="fa fa-edit"></i></a>
                                        <a href="" className="btn btn-danger btn-sm small"><i class="fa fa-trash"></i></a>
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
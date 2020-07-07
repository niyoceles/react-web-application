import React from 'react';
import { Row, Col, Button, Table } from 'react-bootstrap';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';

export class CategoryScreen extends React.Component
{
    constructor(props) {
        super(props);

        this.state = { categories: [] }
    }

    componentDidMount() {
        axios.defaults.headers.common['Authorization'] ='Token e81989f716e5d3068c90e98cf5af38851867b75f';
        axios.get('http://api.nurc.bict.rw/category/')
             .then(result => {
                this.setState({ categories: result.data })
             });
    }

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
                            {
                                this.state.categories.map((category, i) => (
                                    <tr>
                                        <td className="text-center">{ i + 1 }</td>
                                        <td>{ category.name }</td>
                                        <td>
                                            <a href={() => false} className="btn btn-primary btn-sm mr-2 small"><i className="fa fa-edit"></i></a>
                                            <a href={() => false} className="btn btn-danger btn-sm small"><i className="fa fa-trash"></i></a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
				</Row>
			</AdminLayout>
		);
	}
}
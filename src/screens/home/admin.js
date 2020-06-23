import React from 'react';
import { Row, Container, Col, Button, ButtonGroup } from 'react-bootstrap';

import AdminLayout from '../../layouts/AdminLayout';

export class DashboardScreen extends React.Component
{
	render() {
		return (
			<AdminLayout>
				<Row>
					<Col sm={12}>
						<h4>Dashboard</h4>
					</Col>
				</Row>
				<Row className="mt-4">
					<a href="/commisioner" className="card mb-3 col-sm-3 col-md-3 col-xs-12 text-center">
		  				<div className="card-body text-white bg-success rounded">
		  					<i className="fa fa-users" style={{ fontSize: "42px" }}></i>
		    				<h5 className="card-title mt-3">Comissioners</h5>
		    				<p className="card-text">20</p>
		  				</div>
		            </a>
		            <a href="/category" className="card mb-3 col-sm-3 col-md-3 col-xs-12 text-center">
		  				<div className="card-body text-white bg-success rounded">
		  					<i className="fa fa-list-alt" style={{ fontSize: "42px" }}></i>
		    				<h5 className="card-title mt-3">Categories</h5>
		    				<p className="card-text">5</p>
		  				</div>
		            </a>
		            <a href="/articles" className="card mb-3 col-sm-3 col-md-3 col-xs-12 text-center">
		  				<div className="card-body text-white bg-success rounded">
		  					<i className="fa fa-paper-plane" style={{ fontSize: "42px" }}></i>
		    				<h5 className="card-title mt-3">Article</h5>
		    				<p className="card-text">10</p>
		  				</div>
		            </a>
				</Row>
			</AdminLayout>
		);
	}
}
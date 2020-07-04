import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Table } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import ManageComments from '../../components/Comments/ManageComments';
import AdminLayout from '../../layouts/AdminLayout';
import { connect } from 'react-redux';
import { getComments } from '../../redux/actions';

class ManageCommentsScreen extends Component {
	componentDidMount() {
		this.props.getComments();
	}
	render() {
		const { allComments, loading } = this.props.article;
		let comments = !loading ? (
			allComments.map(comment => (
				<ManageComments key={comment.id} comment={comment} />
			))
		) : (
			<Skeleton count={15} duration={2} />
		);
		return (
			<AdminLayout>
				<Row className='mt-5'>
					<Col sm={8}>
						<h4>Comments </h4>
					</Col>
				</Row>
				<Row className='admin-box mt-4'>
					<Table responsive borderless striped hover>
						<thead>
							<tr>
								<th>Title</th>
								<th>Posted by</th>
								<th>Status</th>
								<th>Published time</th>
								<th>Actions</th>
							</tr>
						</thead>
						{comments}
					</Table>
				</Row>
			</AdminLayout>
		);
	}
}
ManageCommentsScreen.propTypes = {
	getComments: PropTypes.func.isRequired,
	article: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
	article: state.article,
});

export default connect(mapStateToProps, { getComments })(ManageCommentsScreen);

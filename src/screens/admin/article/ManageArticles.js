import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Row,
	Col,
	Button,
	Table,
} from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import ManageArticles from '../../../components/Articles/ManageArticles';
import AdminLayout from '../../../layouts/AdminLayout';
import { connect } from 'react-redux';
import { getArticles } from '../../../redux/actions';

class ManageArticlesScreen extends Component {
	componentDidMount() {
		this.props.getArticles();
	}
	render() {
		const { articles, loading } = this.props.article;
		let allArticles = !loading ? (
			articles.map(article => (
				<ManageArticles key={article.id} article={article} />
			))
		) : (
			<Skeleton count={15} duration={2} />
		);
		return (
			<AdminLayout>
				<Row className="mt-5">
					<Col sm={8}>
						<h4>Article</h4>
					</Col>
					<Col sm={2}>
						<Button
							href='/articles/create'
							variant='primary btn-block mb-2'
							className='mr-2'>
							Add New
						</Button>
					</Col>
					<Col sm={2}>
						<Button href='/dashboard' variant='secondary btn-block mb-2'>
							Go back
						</Button>
					</Col>
				</Row>
				<Row className='admin-box mt-4'>
					<Table responsive borderless striped hover>
						<thead>
							<tr>
								<th>Title</th>
								<th>Category</th>
								<th>Posted by</th>
								<th>Status</th>
								<th>Published time</th>
								<th>Actions</th>
							</tr>
						</thead>
						{ allArticles }
					</Table>
				</Row>
			</AdminLayout>
		);
	}
}
ManageArticlesScreen.propTypes = {
	getArticles: PropTypes.func.isRequired,
	article: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
	article: state.article,
});

export default connect(mapStateToProps, { getArticles })(ManageArticlesScreen);

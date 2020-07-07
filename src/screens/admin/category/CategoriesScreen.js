import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Table } from 'react-bootstrap';
import AdminLayout from '../../../layouts/AdminLayout';
import UpdateCategory from './UpdateCategory';
import DeleteCategory from './DeleteCategory';
import { connect } from 'react-redux';
import { getCategories } from '../../../redux/actions';
import Skeleton from 'react-loading-skeleton';
import AddCategory from './AddCategory';

class CategoriesScreen extends React.Component {
	componentDidMount() {
		this.props.getCategories();
	}

	render() {
		const { categories, loading } = this.props.article;
		let allArticles = !loading ? (
			categories.map((category, i) => (
				<tr>
					<td className='text-center'>{i + 1}</td>
					<td>{category.name}</td>
					<td>
						<UpdateCategory
							categoryId={category.id}
							categoryName={category.name}
						/>
						<DeleteCategory
							categoryId={category.id}
							categoryName={category.name}
						/>
					</td>
				</tr>
			))
		) : (
			<Skeleton count={15} duration={2} />
		);

		return (
			<AdminLayout>
				<br />
				<br />
				<br />
				<Row>
					<Col sm={8}>
						<h4>Category</h4>
					</Col>
					<Col sm={2}>
						<AddCategory/>
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
								<th className='text-center'>#</th>
								<th>Name</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>{allArticles}</tbody>
					</Table>
				</Row>
			</AdminLayout>
		);
	}
}
CategoriesScreen.propTypes = {
	getCategories: PropTypes.func.isRequired,
	article: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
	article: state.article,
});

export default connect(mapStateToProps, { getCategories })(CategoriesScreen);

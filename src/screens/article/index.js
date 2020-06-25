import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Container, Col, Button, ButtonGroup, Table, Dropdown } from 'react-bootstrap';
import ManageArticles from '../../components/Articles/ManageArticles';
import AdminLayout from '../../layouts/AdminLayout';
import { connect } from 'react-redux';
import { getArticles } from '../../redux/actions';

class ArticlesScreen extends Component {
    componentDidMount() {
        this.props.getArticles();
      }
	render() {
        const { articles, loading } = this.props.article;
        let recentArticles = !loading ? (
          articles.map(article => <ManageArticles key={article.id} article={article} />)
        ) : (
          <p>Loading ....</p>
        );
		return (
			<AdminLayout>
				<Row>
					<Col sm={8}>
						<h4>Article</h4>
					</Col>
                    <Col sm={2}>
                        <Button href="/articles/create" variant="primary btn-block mb-2" className="mr-2">Add New</Button>
                    </Col>
                    <Col sm={2}>
                        <Button href="/dashboard" variant="secondary btn-block mb-2">Go back</Button>
                    </Col>
				</Row>
				<Row className="admin-box mt-4">
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
                        {recentArticles}
                    </Table>
				</Row>
			</AdminLayout>
		);
	}
}
ArticlesScreen.propTypes = {
    getArticles: PropTypes.func.isRequired,
    article: PropTypes.object.isRequired,
  };
  const mapStateToProps = state => ({
    article: state.article,
  });
  
  export default connect(mapStateToProps, { getArticles })(ArticlesScreen);
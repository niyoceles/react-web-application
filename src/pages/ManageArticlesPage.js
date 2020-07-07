import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ManageArticles from '../components/Articles/ManageArticles';
import Table from 'react-bootstrap/Table';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { connect } from 'react-redux';
import { getArticles } from '../redux/actions';
import Navbar from '../layouts/Navbar'

class ManageArticlesPage extends Component {
  componentDidMount() {
    this.props.getArticles();
  }
  render() {
    const { articles, loading } = this.props.article;
    let recentArticles = !loading ? (
      articles.map(article => <ManageArticles key={article.postId} article={article} />)
    ) : (
      <p>Loading ....</p>
    );
    return (
      <>
      <Navbar/>
      <div style={{width:'100%' ,padding:10,}}>
      Articles List,
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>User</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>
        {recentArticles}
      </Table>
      </>
    );
  }
}

ManageArticlesPage.propTypes = {
  getArticles: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  article: state.article,
});

export default connect(mapStateToProps, { getArticles })(ManageArticlesPage);

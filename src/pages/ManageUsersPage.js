import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Users from '../components/Users/Users';
import { Row, Container, Col, Button, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getUsers } from '../redux/actions';
import SendInvite from '../components/Auth/SendInvite';
import AdminLayout from '../layouts/AdminLayout';

class ManageUsersPage extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const { users, loading } = this.props.user;
    let recentUsers = !loading ? (
      users.map(user => <Users key={user.postId} userp={user} />)
    ) : (
      <p>Loading ....</p>
    );
    return (
      <AdminLayout>
       <Row>
					<Col sm={8}>
						<h4>Category</h4>
					</Col>
          <Col sm={2}>
              <SendInvite/>
          </Col>
          <Col sm={2}>
              <Button href="/dashboard" variant="secondary btn-block mb-2">Go back</Button>
          </Col>
				</Row>
        <Row className="admin-box mt-4">
        <Table responsive borderless striped hover>
        <thead>
            <tr>
            <th>Id</th>
            <th>username</th>
            <th>email</th>
            <th>Actions</th>
          </tr>
        </thead>
        {recentUsers}
        </Table>
				</Row>
		 </AdminLayout>
    );
  }
}

ManageUsersPage.propTypes = {
  getUsers: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, { getUsers })(ManageUsersPage);

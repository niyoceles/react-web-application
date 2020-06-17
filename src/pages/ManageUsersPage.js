import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Users from '../components/Users/Users';
import Table from 'react-bootstrap/Table';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { connect } from 'react-redux';
import { getUsers } from '../redux/actions';
import Navbar from '../layouts/Navbar'
import SendInvite from '../components/Auth/SendInvite';

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
      <>
      <Navbar/>
      <div style={{width:'100%' ,padding:10,}}>
      Users List, <SendInvite/>
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
        {recentUsers}
      </Table>
      </>
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

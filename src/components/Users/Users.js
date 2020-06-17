import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import DeleteUser from '../Users/DeleteUser';
import UpdateUser from '../Users/UpdateUser';
import { connect } from 'react-redux';

class Users extends Component {
  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      userp: {
        body,
        createAt,
        userImage,
        userName,
        postId,
        likeCount,
        commentCount,
      },
      user: {
        authenticated,
        credentials: { username },
      },
    } = this.props;

    // const deleteButton =
    //   authenticated && userName === username ? (
    //     <DeleteUser postId={postId} />
    //   ) : null;

    return (
      <tbody>
        <tr>
          <td>{postId}</td>
          <td>{userName}</td>
          <td>{dayjs(createAt).fromNow()}</td>
          <td>
            <DeleteUser
              starId={postId}
              starName={userName}
              starCoordinates={dayjs(createAt).fromNow()}
            />
            <UpdateUser
              starId={postId}
              starName={userName}
              starCoordinates={dayjs(createAt).fromNow()}
            />
          </td>
        </tr>
      </tbody>
    );
  }
}

Users.propTypes = {
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  openDialog: PropTypes.bool,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Users);

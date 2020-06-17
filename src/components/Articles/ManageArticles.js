import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import DeleteArticle from './DeleteArticle';
import UpdateArticle from './UpdateArticle';
import { connect } from 'react-redux';

class ManageArticles extends Component {
  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      article: {
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
    //     <DeleteArticle postId={postId} />
    //   ) : null;

    return (
      <tbody>
        <tr>
          <td>{postId}</td>
          <td>{userName}</td>
          <td>{dayjs(createAt).fromNow()}</td>
          <td>
            <DeleteArticle
              starId={postId}
              starName={userName}
              starCoordinates={dayjs(createAt).fromNow()}
            />
            <UpdateArticle
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

ManageArticles.propTypes = {
  user: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  openDialog: PropTypes.bool,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(ManageArticles);

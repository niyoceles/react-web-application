import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import DeleteUser from '../Users/DeleteUser';
// import UpdateUser from '../Users/UpdateUser';
import { connect } from 'react-redux';

class Users extends Component {
	render() {
		dayjs.extend(relativeTime);
		const {
			userp: { createAt, userName, postId },
		} = this.props;

		return (
			<tbody>
				<tr>
					<td>{postId}</td>
					<td>{userName}</td>
					<td>{dayjs(createAt).fromNow()}</td>
					<td>
						<DeleteUser
							articleId={postId}
							userNames={userName}
							contextText={dayjs(createAt).fromNow()}
						/>
						{/*<UpdateUser
							articleId={postId}
							userNames={userName}
							contextText={dayjs(createAt).fromNow()}
						/>*/}
					</td>
				</tr>
			</tbody>
		);
	}
}

Users.propTypes = {
	user: PropTypes.object.isRequired,
	users: PropTypes.object.isRequired,
	openDialog: PropTypes.bool,
};

const mapStateToProps = state => ({
	user: state.user,
});

export default connect(mapStateToProps)(Users);

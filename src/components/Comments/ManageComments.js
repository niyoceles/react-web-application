import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { connect } from 'react-redux';
import ChangeCommentStatus from './ChangeCommentStatus';

class ManageArticles extends Component {
	render() {
		dayjs.extend(relativeTime);
		const {
			comment: { id, name, email, status, message, article, created_at },
		} = this.props;

		return (
			<tbody>
				<tr>
					<td>{id}</td>
					<td>{name}</td>
					<td>{email}</td>
					<td>{dayjs(created_at).fromNow()}</td>
					<td style={{ display: 'block', width: '190px' }}>
						<ChangeCommentStatus
							commentId={id}
							email={email}
							name={name}
							commentStatus={status}
							commentName={article}
							message={message}
							createAt={dayjs(created_at).fromNow()}
						/>
						{status ? 'Active' : 'Deactive'}
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

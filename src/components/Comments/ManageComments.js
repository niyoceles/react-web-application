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
			article: { id, title, text, status, file, category, user, created_at },
		} = this.props;

		return (
			<tbody>
				<tr>
					<td>{title}</td>
					<td>{category}</td>
					<td>{user}</td>
					<td style={{ display: 'block', width: '190px' }}>
						<ChangeCommentStatus
							articleId={id}
							userNames={user}
							articleFile={file}
							articleStatus={status}
							articleName={title}
							contentText={text}
							createAt={created_at}
						/>
						{status ? 'Active' : 'Deactive'}
					</td>
					<td>{dayjs(created_at).fromNow()}</td>
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

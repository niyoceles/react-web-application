import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Dropdown } from 'react-bootstrap';

import DeleteArticle from './DeleteArticle';
import UpdateArticle from './UpdateArticle';
import { connect } from 'react-redux';
import ChangeArticleStatus from './ChangeArticleStatus';

class ManageArticles extends Component {
	render() {
		dayjs.extend(relativeTime);
		const {
			article: { id, title, text, status, file, category, user, created_at },
			// user: {
			//   authenticated,
			//   credentials: { username },
			// },
		} = this.props;

		// const deleteButton =
		//   authenticated && userName === username ? (
		//     <DeleteArticle postId={postId} />
		//   ) : null;

		return (
			<tbody>
				<tr>
					<td>{title}</td>
					<td>{category}</td>
					<td>{user}</td>
					<td style={{ display: 'block', width: '190px' }}>
						<ChangeArticleStatus
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
					<td>
						<Dropdown>
							<Dropdown.Toggle
								variant='success'
								className='btn-sm'
								id='dropdown-basic'>
								Action
							</Dropdown.Toggle>

							<Dropdown.Menu>
								<Dropdown.Item href='#'>View</Dropdown.Item>
								<Dropdown.Item href='#'>Enable / Disale</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</td>
					<td>
						<UpdateArticle
							articleId={id}
							articleName={title}
							userNames={user}
							category={category}
							contentText={text}
							contentFile={file}
						/>
					</td>
					<td>
						<DeleteArticle
							articleId={id}
							userNames={user}
							articleName={title}
							contentText={text}
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

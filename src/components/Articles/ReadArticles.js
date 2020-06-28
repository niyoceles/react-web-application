import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {
	Col,
	Image,
} from 'react-bootstrap';

import ReadArticle from './UpdateArticle';
import { connect } from 'react-redux';
// import ChangeArticleStatus from './ChangeArticleStatus';

class ReadArticles extends Component {
	render() {
		dayjs.extend(relativeTime);
		const {
			articleItem: {
				id,
				title,
				text,
				status,
				file,
				category,
				user,
				created_at,
			},
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
			<Col sm={4}>
			<Link to={`/article/${id}`}>
      <Image
				src={`${file}?auto=compress&cs=tinysrgb&dpr=1&w=500`}
        className='img-fluid img-responsive'
        style={{ width: '100%', height:'200px' }}
      />
      <p className='mt-2'>
        <a href={`/article/${id}`}>
         {title}
        </a>
			</p>
			<small>{dayjs(created_at).fromNow()}</small>
			</Link>
    </Col>
		);
	}
}

ReadArticles.propTypes = {
	user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	user: state.user,
});

export default connect(mapStateToProps)(ReadArticles);

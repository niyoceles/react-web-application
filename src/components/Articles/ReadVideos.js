import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {
	Col,
} from 'react-bootstrap';

import ReadArticle from './UpdateArticle';
import { connect } from 'react-redux';
// import ChangeArticleStatus from './ChangeArticleStatus';

class ReadVideos extends Component {
	render() {
		dayjs.extend(relativeTime);
		const {
			videoItem: {
				id,
				title,
				text,
				status,
				file,
				category,
				created_at,
			},
		} = this.props;
		return (
			<Col sm={4}>
			<Link to={`/article/${id}`}>
			<video class='video-fluid' controls style={{ width: '100%' }}>
			<source
				src={`${file}?auto=compress&cs=tinysrgb&dpr=1&w=500`}
				type='video/mp4'
			/>
			</video>
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

ReadVideos.propTypes = {
	user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	user: state.user,
});

export default connect(mapStateToProps)(ReadVideos);

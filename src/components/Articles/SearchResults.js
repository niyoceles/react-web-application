import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Row, Col, Image } from 'react-bootstrap';

class SearchResults extends Component {
	render() {
		dayjs.extend(relativeTime);
		const {
			resultItem: { id, title, text, status, file, category, created_at },
		} = this.props;

		return (
				<Col sm={4}>
					<Link to={`/article/${id}`}>
						<iframe
							src={`${file}?auto=compress&cs=tinysrgb&dpr=1&w=500`}
							frameBorder='0'
							scrolling='no'
							autoplay='false'
							style={{
								width: '100%',
								height: '350px',
								overflow: 'hidden',
							}}></iframe>
						<p className='mt-2'>
							<a href={`/article/${id}`}>{title}</a>
						</p>
						<small>{dayjs(created_at).fromNow()}</small>
					</Link>
				</Col>
		);
	}
}

export default SearchResults;

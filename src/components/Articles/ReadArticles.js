import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {
	Col, Row
} from 'react-bootstrap';

class ReadArticles extends Component {
	render() {
		dayjs.extend(relativeTime);
		
		const {
			category, articles
		} = this.props;

		return (
			<div className="mb-5">
				<Row>
					<Col sm={12}><h2>{category}</h2></Col>
				</Row>
				<Row>
					{
						articles.map(article => (
							<Col sm={4}>
								<Link to={`/article/${article.id}`}>
									<iframe
										src={`${article.file}?auto=compress&cs=tinysrgb&dpr=1&w=500`}
										frameBorder='0'
										scrolling='no'
										autoplay='false'
										style={{
											width: '100%',
											height: '350px',
											overflow: 'hidden',
										}}></iframe>
					      			<p className='mt-2'>
					        			<a href={`/article/${article.id}`}>
					         				{article.title}
					        			</a>
									</p>
									<small>{dayjs(article.created_at).fromNow()}</small>
								</Link>
				    		</Col>
						))
					}
	    		</Row>
    		</div>
		);
	}
}

ReadArticles.propTypes = {
	category: PropTypes.string.isRequired,
	articles: PropTypes.array.isRequired,
};

export default ReadArticles;

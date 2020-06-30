import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import ReactHtmlParser from 'react-html-parser';
import { Container, Row, Col, Media } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import AppLayout from '../../layouts/AppLayout';
import { connect } from 'react-redux';
import {
	viewArticle,
	countViewArticle,
	getArticleViews,
} from '../../redux/actions';

import './css/article.css';
import AddComment from '../../components/Comments/AddComment';
import ViewComments from '../../components/Comments/ViewComments';

class ReadArticleScreen extends Component {
	componentDidMount() {
		const lastPath = window.location.pathname;
		var articleSlugId = lastPath.split('/');
		const data = {
			article: articleSlugId[2],
		};
		console.log('DDDD', data);
		this.props.viewArticle(articleSlugId[2]);
		this.props.countViewArticle(data);
		this.props.getArticleViews(data);
	}
	render() {
		dayjs.extend(relativeTime);
		const {
			id,
			title,
			text,
			file,
			created_at,
		} = this.props.article.readArticle;
		const articleViews = this.props.article.views.length;
		return (
			<AppLayout>
				<Container fluid className='p-5 mt-5'>
					<Row>
						<Col sm={8}>
							<Row className='view'>
								{!file ? (
									<Skeleton count={15} duration={2} />
								) : (
									<iframe
										src={`${file}?auto=compress&cs=tinysrgb&dpr=1&w=500`}
										frameBorder='0'
										scrolling='no'
										autoplay='false'
										style={{
											width: '100%',
											height: '500px',
											overflow: 'hidden',
										}}></iframe>
								)}
								<h4 className='title mt-4 col-sm-12'>{title}</h4>
								<small className='mt-0 col-sm-12'>
									{articleViews} views • {dayjs(created_at).fromNow()}
								</small>
								<p className='mt-3 col-sm-12'>{ReactHtmlParser(text)}</p>
							</Row>
							<hr />
							<AddComment articleId={id} />
							<hr />
							<ViewComments articleId={id} />
						</Col>
						<Col sm={4}>
							Related Article
							<Media className='mt-3'>
								<img
									width={150}
									className='mr-3'
									src='https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
									alt='Generic placeholder'
								/>
								<Media.Body>
									<a href='/article/title/'>
										<h6>Mega Hits 2020 🌱 The Best Of Vocal...</h6>
									</a>
									<small className='mt-0'>Article</small>
									<br />
									<small className='mt-0'>11k Views - 1 day ago</small>
								</Media.Body>
							</Media>
							<Media className='mt-3'>
								<img
									width={150}
									className='mr-3'
									src='https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
									alt='Generic placeholder'
								/>
								<Media.Body>
									<a href='/article/title/'>
										<h6>Mega Hits 2020 🌱 The Best Of Vocal...</h6>
									</a>
									<small className='mt-0'>Article</small>
									<br />
									<small className='mt-0'>11k Views - 1 day ago</small>
								</Media.Body>
							</Media>
							<Media className='mt-3'>
								<img
									width={150}
									className='mr-3'
									src='https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
									alt='Generic placeholder'
								/>
								<Media.Body>
									<a href='/article/title/'>
										<h6>Mega Hits 2020 🌱 The Best Of Vocal...</h6>
									</a>
									<small className='mt-0'>Article</small>
									<br />
									<small className='mt-0'>11k Views - 1 day ago</small>
								</Media.Body>
							</Media>
							<Media className='mt-3'>
								<img
									width={150}
									className='mr-3'
									src='https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
									alt='Generic placeholder'
								/>
								<Media.Body>
									<a href='/article/title/'>
										<h6>Mega Hits 2020 🌱 The Best Of Vocal...</h6>
									</a>
									<small className='mt-0'>Article</small>
									<br />
									<small className='mt-0'>11k Views - 1 day ago</small>
								</Media.Body>
							</Media>
							<Media className='mt-3'>
								<img
									width={150}
									className='mr-3'
									src='https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
									alt='Generic placeholder'
								/>
								<Media.Body>
									<a href='/article/title/'>
										<h6>Mega Hits 2020 🌱 The Best Of Vocal...</h6>
									</a>
									<small className='mt-0'>Article</small>
									<br />
									<small className='mt-0'>11k Views - 1 day ago</small>
								</Media.Body>
							</Media>
						</Col>
					</Row>
				</Container>
			</AppLayout>
		);
	}
}

ReadArticleScreen.propTypes = {
	viewArticle: PropTypes.func.isRequired,
	countViewArticle: PropTypes.func.isRequired,
	getArticleViews: PropTypes.func.isRequired,
	article: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
	article: state.article,
});

export default connect(mapStateToProps, {
	viewArticle,
	countViewArticle,
	getArticleViews,
})(ReadArticleScreen);

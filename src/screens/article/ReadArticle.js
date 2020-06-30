import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import ReactHtmlParser from 'react-html-parser';
import { Container, Row, Col, Image, Media } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import AppLayout from '../../layouts/AppLayout';
import { connect } from 'react-redux';
import { viewArticle } from '../../redux/actions';

class ReadArticleScreen extends Component {
	componentDidMount() {
		const lastPath = window.location.pathname;
		var articleSlugId = lastPath.split('/');
		this.props.viewArticle(articleSlugId[2]);
	}
	render() {
		dayjs.extend(relativeTime);
		console.log('success:', this.props.article.readArticle);
		const {
			title,
			text,
			file,
			user,
			created_at,
		} = this.props.article.readArticle;
		return (
			<AppLayout>
				<Container fluid className='p-5 mt-5'>
					<Row>
						<Col sm={8}>
							{!file ? (
								<Skeleton count={15} duration={2} />
							) : (
								<iframe
									src="https://mdbootstrap.com/img/video/Sail-Away.mp4"
									frameBorder="0"
									scrolling="no"
									autoplay="false"
									style={{ width: '100%', height: '500px', overflow: 'hidden' }}></iframe>
							)}
							<h2>{title}</h2>
							<small className='mt-2'>{dayjs(created_at).fromNow()}</small>
							<p className='mt-2'>{ReactHtmlParser(text)}</p>
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
	article: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
	article: state.article,
});

export default connect(mapStateToProps, { viewArticle })(ReadArticleScreen);

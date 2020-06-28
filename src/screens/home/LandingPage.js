import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Container,
	Row,
	Col,
	Image,
	InputGroup,
	FormControl,
	Button,
} from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import AppLayout from '../../layouts/AppLayout';
import ReadArticles from '../../components/Articles/ReadArticles';
import './css/home.css';
import { connect } from 'react-redux';
import { viewArticles } from '../../redux/actions';

export class LandingPageScreen extends Component {
	state = {
		allArticles: null,
	};
	componentDidMount() {
		this.props.viewArticles();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.readArticles !== null) {
			console.log(nextProps.article.readArticles[0]);
			this.setState({
				allArticles: nextProps.article.readArticles[0],
			});
		}
	}

	render() {
		const { readArticles, loading } = this.props.article;
		const { allArticles } = this.state;
		let landingArticles = allArticles ? (
			allArticles.map(articleItem => (
				<ReadArticles key={articleItem.id} articleItem={articleItem} />
			))
		) : (
			<Skeleton count={15} duration={2} />
		);

		return (
			<AppLayout>
				<div className='section-1'>
					<Container>
						<Row className='p-5'>
							<Col lg={12} className='mt-5 text'>
								<br />
								<h4>Welcome to</h4>
								<h2>NURC</h2>
							</Col>
							<Col lg={8}>
								<InputGroup size='lg'>
									<FormControl
										aria-label='Large'
										aria-describedby='inputGroup-sizing-sm'
										placeholder='What are you looking for?'
									/>
									<InputGroup.Prepend>
										<Button variant='primary'>
											<i className='fa fa-search'></i> Search
										</Button>
									</InputGroup.Prepend>
								</InputGroup>
							</Col>
						</Row>
					</Container>
				</div>
				<Container className='py-5'>
					<Row>
						<h4 className='mb-3'>Article</h4>
						<Row>{landingArticles}</Row>
					</Row>
					<hr />
					<Row>
						<h4 className='mb-3'>Video</h4>
						<Row>
							<Col sm={4}>
								<video class='video-fluid' controls style={{ width: '100%' }}>
									<source
										src='https://mdbootstrap.com/img/video/Sail-Away.mp4'
										type='video/mp4'
									/>
								</video>
								<small>January, 20 2020</small>
								<p className='mt-2'>
									<a href='/article/title'>
										What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
										printing and typesetting industry Lorem Ipsum has been the
										industry's standard dummy text ever
									</a>
								</p>
							</Col>
							<Col sm={4}>
								<video class='video-fluid' controls style={{ width: '100%' }}>
									<source
										src='https://mdbootstrap.com/img/video/Sail-Away.mp4'
										type='video/mp4'
									/>
								</video>
								<small>January, 20 2020</small>
								<p className='mt-2'>
									<a href='/article/title'>
										What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
										printing and typesetting industry Lorem Ipsum has been the
										industry's standard dummy text ever
									</a>
								</p>
							</Col>
							<Col sm={4}>
								<video class='video-fluid' controls style={{ width: '100%' }}>
									<source
										src='https://mdbootstrap.com/img/video/Sail-Away.mp4'
										type='video/mp4'
									/>
								</video>
								<small>January, 20 2020</small>
								<p className='mt-2'>
									<a href='/article/title'>
										What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
										printing and typesetting industry Lorem Ipsum has been the
										industry's standard dummy text ever
									</a>
								</p>
							</Col>
						</Row>
					</Row>
					<hr />
					<Row>
						<h4 className='mb-3'>Document</h4>
						<Row>
							<Col sm={4}>
								<Image
									src='https://cdn.donmai.us/original/71/f8/__android_18_trunks_and_android_17_dragon_ball_and_1_more_drawn_by_astor_alexander__71f85955cdb951ec232d6f1279078ddc.jpg'
									className='img-fluid img-responsive'
									style={{ width: '100%' }}
								/>
								<small>January, 20 2020</small>
								<p className='mt-2'>
									<a href='/article/title'>
										What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
										printing and typesetting industry Lorem Ipsum has been the
										industry's standard dummy text ever
									</a>
								</p>
							</Col>
							<Col sm={4}>
								<Image
									src='https://cdn.donmai.us/original/71/f8/__android_18_trunks_and_android_17_dragon_ball_and_1_more_drawn_by_astor_alexander__71f85955cdb951ec232d6f1279078ddc.jpg'
									className='img-fluid img-responsive'
									style={{ width: '100%' }}
								/>
								<small>January, 20 2020</small>
								<p className='mt-2'>
									<a href='/article/title'>
										What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
										printing and typesetting industry Lorem Ipsum has been the
										industry's standard dummy text ever
									</a>
								</p>
							</Col>
							<Col sm={4}>
								<Image
									src='https://cdn.donmai.us/original/71/f8/__android_18_trunks_and_android_17_dragon_ball_and_1_more_drawn_by_astor_alexander__71f85955cdb951ec232d6f1279078ddc.jpg'
									className='img-fluid img-responsive'
									style={{ width: '100%' }}
								/>
								<small>January, 20 2020</small>
								<p className='mt-2'>
									<a href='/article/title'>
										What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
										printing and typesetting industry Lorem Ipsum has been the
										industry's standard dummy text ever
									</a>
								</p>
							</Col>
						</Row>
					</Row>
				</Container>
			</AppLayout>
		);
	}
}

LandingPageScreen.propTypes = {
	viewArticles: PropTypes.func.isRequired,
	article: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
	article: state.article,
});

export default connect(mapStateToProps, { viewArticles })(LandingPageScreen);

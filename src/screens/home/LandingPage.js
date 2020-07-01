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
		articles: null,
	};

	componentDidMount() {
		this.props.viewArticles();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.article.readArticles !== null) {
			this.setState({
				articles: nextProps.article.readArticles.articles,
			});
		}
	}

	render() {
		const { articles } = this.state;
		
		let allArticles = articles ? (
			articles.map(item => (
				<ReadArticles category={item.category} articles={item.articles} />
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
					<div>
						{allArticles}
					</div>
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

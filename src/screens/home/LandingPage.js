import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
	Container,
	Row,
	Col,
	InputGroup,
	FormControl,
	Button,
} from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import ClipLoader from 'react-spinners/ClipLoader';
import { css } from '@emotion/core';
import AppLayout from '../../layouts/AppLayout';
import ReadArticles from '../../components/Articles/ReadArticles';
import SearchResults from '../../components/Articles/SearchResults';
import './css/home.css';
import { connect } from 'react-redux';
import { viewArticles, searchArticles } from '../../redux/actions';

const override = css`
	display: block;
	margin: 0 auto;
	border-color: green;
`;

export class LandingPageScreen extends Component {
	state = {
		search: '',
		articles: null,
		results: null,
		loading: false,
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

		if (nextProps.article.searchArticles !== null) {
			this.setState({
				results: nextProps.article.searchArticles,
				loading: false,
			});
		}
	}

	handleSearch = event => {
		event.preventDefault();
		const { search } = this.state;
		this.setState({
			loading: true,
		});

		this.props.searchArticles(search);
	};

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	render() {
		const { articles, results, loading, search } = this.state;

		let allArticles = articles ? (
			articles.map(item => (
				<ReadArticles category={item.category} articles={item.articles} />
			))
		) : (
			<Skeleton count={15} duration={2} />
		);

		let noResultsArticles =
			results != null && results.length < 1 ? (
				<Fragment>
					<div>
						{' '}
						<h4>Your search, {search} did not match any article</h4>
					</div>
				</Fragment>
			) : null;

		let resultsArticles =
			results != null && results.length > 0
				? results.map(item => <SearchResults key={item.id} resultItem={item} />)
				: null;

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
										name='search'
										value={search}
										onChange={this.handleChange}
										aria-describedby='inputGroup-sizing-sm'
										placeholder='What are you looking for?'
									/>
									<InputGroup.Prepend>
										<Button variant='primary' onClick={this.handleSearch}>
											<i className='fa fa-search'></i> Search
										</Button>
									</InputGroup.Prepend>
								</InputGroup>
							</Col>
						</Row>
					</Container>
				</div>
				<div className='sweet-loading'>
					<ClipLoader
						css={override}
						size={250}
						color={'#123abc'}
						loading={loading}
					/>
				</div>
				<Container className='py-5'>
					<div>
						<Row>{resultsArticles || noResultsArticles}</Row>
					</div>
				</Container>

				<Container className='py-5'>
					<div>{allArticles}</div>
				</Container>
			</AppLayout>
		);
	}
}

LandingPageScreen.propTypes = {
	viewArticles: PropTypes.func.isRequired,
	searchArticle: PropTypes.func.isRequired,
	article: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	article: state.article,
});

export default connect(mapStateToProps, { viewArticles, searchArticles })(
	LandingPageScreen
);

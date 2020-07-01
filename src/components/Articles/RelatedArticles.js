import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
	Col,
} from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import { connect } from 'react-redux';
import { relatedArticles } from '../../redux/actions';
import Articles from './Articles';

class RelatedArticles extends Component {
	state = {
		articles: null,
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.article.relatedArticles !== null) {
			this.props.relatedArticles(nextProps.article.readArticle.category);
			this.setState({
				articles: nextProps.article.relatedArticles,
			});
		}
	}

	render() {
		const { articles } = this.state;
		let landingRelatedArticles = articles ? (
			articles.map(articleItem => (
				<Articles key={articleItem.id} articleItem={articleItem} />
			))
		) : (
			<Skeleton count={15} duration={2} />
		);
		return (
			<Col sm={4}>
				Related Article
				{landingRelatedArticles}
			</Col>
		);
	}
}

RelatedArticles.propTypes = {
	relatedArticles: PropTypes.func.isRequired,
	categoryId: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
	article: state.article,
});

export default connect(mapStateToProps, { relatedArticles })(RelatedArticles);

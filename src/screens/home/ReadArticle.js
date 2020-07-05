import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import ReactHtmlParser from 'react-html-parser';
import { Container, Row, Col} from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import AppLayout from '../../layouts/AppLayout';
import { connect } from 'react-redux';
import {
	viewArticle,
	countViewArticle,
	getArticleViews,
	relatedArticles
} from '../../redux/actions';
import '../admin/article/css/article.css';
import AddComment from '../../components/Comments/AddComment';
import ViewComments from '../../components/Comments/ViewComments';
import RelatedArticles from '../../components/Articles/RelatedArticles';

class ReadArticleScreen extends Component {
	componentDidMount() {
		const lastPath = window.location.pathname;
		var articleSlugId = lastPath.split('/');
		const data = {
			article: articleSlugId[2],
		};
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
			category,
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
										title={title}
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
							<ViewComments articleId={this.props.article.readArticle.id} />
						</Col>
						<RelatedArticles categoryId={category}/>
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
	relatedArticles
})(ReadArticleScreen);

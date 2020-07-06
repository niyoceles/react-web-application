import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {
	Row,
	Col,
} from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import { connect } from 'react-redux';
import { viewComments } from '../../redux/actions';
import Comments from './Comments';

class ViewComments extends Component {
  state={
    allcomments: null,
  }
	componentDidMount() {
		const lastPath = window.location.pathname;
		var articleSlugId = lastPath.split('/');
		const data = {
			article: articleSlugId[2],
		};
		this.props.viewComments(data);
  }
  
  componentWillReceiveProps(nextProps) {
		if (nextProps.article.comments !== null) {
			this.setState({
				allcomments: nextProps.article.comments,
			});
		}
	}

	render() {
    const { comments } = this.props.article;
    const {allcomments} = this.state;
    const numberComments = comments.length;
    let landingComents = allcomments ? (
			allcomments.map(commentItem => (
				<Comments key={commentItem.id} commentItem={commentItem} />
			))
		) : (
			<Skeleton count={15} duration={2} />
		);
		return (
			<Row className='comments'>
				<Col sm={10}>
					{numberComments} Comments
					{landingComents}
				</Col>
			</Row>
		);
	}
}

ViewComments.propTypes = {
	viewComments: PropTypes.func.isRequired,
	articleId: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
	article: state.article,
});

export default connect(mapStateToProps, { viewComments })(ViewComments);

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { changeArticleStatus } from '../../redux/actions';

class ChangeArticleStatus extends Component {
	state = {
		open: false,
		loaded: false,
	};

	handleOpen = () => {
		this.setState({ open: true });
	};
	handleClose = () => {
		this.setState({ open: false });
	};

	changeArticleStatus = () => {
		const articleDataStatus = { id: this.props.articleId };
		this.props.changeArticleStatus(articleDataStatus);
		this.setState({ open: false });
	};

	refreshPage = () => {
		window.location.reload(false);
	};

	render() {
		const { articleStatus } = this.props;
		if (this.props.article.article.id === this.props.articleId) {
			this.refreshPage();
		}
		
		return (
			<Fragment>
				<a
					href={() => false}
					onClick={this.handleOpen}
					className='btn btn-primary btn-sm mr-2 small'>
					{this.props.articleStatus ? (
						<i class='fa fa-check-square' aria-hidden='true'></i>
					) : (
						<i
							class='fa fa-exclamation-triangle'
							style={{ color: '#333' }}
							aria-hidden='true'></i>
					)}
				</a>
				<Modal show={this.state.open} onHide={this.handleClose} size='lg'>
					<Modal.Header closeButton>
						<Modal.Title id='contained-modal-title-vcenter'>
							Change article status
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h5>
							This is article is {articleStatus ? ' Active' : ' Deactive'}; Are
							you sure to change it?
						</h5>
					</Modal.Body>
					<Modal.Footer>
						<Button variant='secondary' onClick={this.handleClose}>
							No, Close
						</Button>
						<Button color='primary' onClick={this.changeArticleStatus}>
							Yes, changes
						</Button>
					</Modal.Footer>
				</Modal>
			</Fragment>
		);
	}
}

ChangeArticleStatus.propTypes = {
	changeArticleStatus: PropTypes.func.isRequired,
	articleId: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
	article: state.article,
});

export default connect(mapStateToProps, { changeArticleStatus })(
	ChangeArticleStatus
);

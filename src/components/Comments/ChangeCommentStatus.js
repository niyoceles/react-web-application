import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { changeCommentStatus } from '../../redux/actions';

class ChangeCommentStatus extends Component {
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

	changeStatus = () => {
		const articleDataStatus = { id: this.props.commentId };
		this.props.changeCommentStatus(articleDataStatus, this.props.history);
		this.setState({ open: false });
	};

	refreshPage = () => {
		window.location.reload(false);
	};

	render() {
		const { commentStatus, message, email, name, createAt } = this.props;

		if (this.props.article.comment.id === this.props.commentId) {
			this.refreshPage();
		}

		return (
			<Fragment>
				<a
					href='#/'
					onClick={this.handleOpen}
					className='btn btn-primary btn-sm mr-2 small'>
					{this.props.commentStatus ? (
						<i className='fa fa-check-square' aria-hidden='true'></i>
					) : (
						<i
							className='fa fa-exclamation-triangle'
							style={{ color: '#333' }}
							aria-hidden='true'></i>
					)}
				</a>
				<Modal show={this.state.open} onHide={this.handleClose} size='lg'>
					<Modal.Header closeButton>
						<Modal.Title id='contained-modal-title-vcenter'>
							Change comment status
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Card>
							<Card.Header>
								Written by {name}, {email}
							</Card.Header>
							<Card.Body>{message}</Card.Body>
							<footer className='blockquote-footer'>{createAt}</footer>
							<Card.Footer className='text-muted'>
								This is comment is {commentStatus ? ' Active' : ' Deactive'};
								Are you sure to change it?
							</Card.Footer>
						</Card>
					</Modal.Body>
					<Modal.Footer>
						<Button variant='secondary' onClick={this.handleClose}>
							No, Close
						</Button>
						<Button color='primary' onClick={this.changeStatus}>
							Yes, changes
						</Button>
					</Modal.Footer>
				</Modal>
			</Fragment>
		);
	}
}

ChangeCommentStatus.propTypes = {
	changeCommentStatus: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	article: state.article,
});

export default connect(mapStateToProps, { changeCommentStatus })(
	ChangeCommentStatus
);

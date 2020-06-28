import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import ReactHtmlParser from 'react-html-parser';
import { Modal, Button, Image } from 'react-bootstrap';
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
		this.props.changeArticleStatus(articleDataStatus, this.props.history);
		this.setState({ open: false });
	};
	render() {
		dayjs.extend(relativeTime);
		const {
			articleFile,
			articleName,
			articleId,
			articleStatus,
			contentText,
			createAt,
		} = this.props;
		return (
			<Fragment>
				<a
					href='#'
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
					<Modal.Body
						style={{
							'max-height': 'calc(100vh - 210px)',
							'overflow-y': 'auto',
						}}>
						<Image
							src={`${articleFile}?auto=compress&cs=tinysrgb&dpr=1&w=500`}
							className='img-fluid img-responsive'
							style={{ width: '100%', height: '100%' }}
						/>
						<h2>{articleName}</h2>
						<small className='mt-2'>{dayjs(createAt).fromNow()}</small>
						<p className='mt-2'>{ReactHtmlParser(contentText)}</p>
					</Modal.Body>
					<Modal.Footer>
						<h5>
							This is article is {articleStatus ? ' Active' : ' Deactive'}; Are
							you sure to change it?
						</h5>
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

export default connect(null, { changeArticleStatus })(ChangeArticleStatus);

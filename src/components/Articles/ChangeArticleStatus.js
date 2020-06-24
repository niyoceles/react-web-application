import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { connect } from 'react-redux';
import { changeArticleStatus } from '../../redux/actions';

class ChangeArticleStatus extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  changeArticleStatus = () => {
    const articleDataStatus= {id: this.props.articleId}
    this.props.changeArticleStatus(articleDataStatus, this.props.history);
    this.setState({ open: false });
  };
  render() {

    return (
      <Fragment>
      <a href="#" onClick={this.handleOpen} className="btn btn-primary btn-sm mr-2 small">{this.props.articleStatus?(<i class="fa fa-check-square" aria-hidden="true"></i>):(<i class="fa fa-exclamation-triangle" style={{color:'#333'}} aria-hidden="true"></i>)}</a>
        <Modal show={this.state.open} onHide={this.handleClose} size="sm">
          <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Change article status
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <h5>Are you sure to change status of this article?</h5>
        <br/> 
        Article name: {this.props.articleName}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>Close</Button>
          <Button color="primary" onClick={this.changeArticleStatus}>Yes, changes</Button>
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
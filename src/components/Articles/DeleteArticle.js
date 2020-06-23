import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Upload from '../../helpers/upload/Upload';
import Button from 'react-bootstrap/Button';

import { connect } from 'react-redux';
import { deleteArticle } from '../../redux/actions';

class DeleteArticle extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  deleteArticle = () => {
    const deleteData= {id: this.props.articleId}
    this.props.deleteArticle(deleteData);
    this.setState({ open: false });
  };
  render() {

    return (
      <Fragment>
        <Button variant="danger" onClick={this.handleOpen} className="pull-right">
        Delete
      </Button>
        <Modal show={this.state.open} onHide={this.handleClose} size="lg">
          <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Delete article
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <h4>Are you sure to delete this article</h4> 
        Article name: {this.props.articleName} <br />
        Written by:{this.props.userNames}
        </Modal.Body>
        <Modal.Footer>
          <Button color="secondary" onClick={this.handleClose}>Close</Button>
          <Button color="primary" onClick={this.deleteArticle}>Save changes</Button>
          </Modal.Footer>
        </Modal>
    </Fragment>
    );
  }
}

DeleteArticle.propTypes = {
  deleteArticle: PropTypes.func.isRequired,
  articleId: PropTypes.number.isRequired,
};

export default connect(null, { deleteArticle })(DeleteArticle);
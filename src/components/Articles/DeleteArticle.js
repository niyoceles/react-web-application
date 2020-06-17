import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  MDBIcon, MDBModal,MDBBtn, MDBModalBody, MDBModalHeader,MDBModalFooter
} from 'mdbreact';

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
    this.props.deleteArticle(this.props.articleId);
    this.setState({ open: false });
  };
  render() {

    return (
      <Fragment>
        <MDBBtn rounded outline size="sm" onClick={this.handleOpen}>
          <MDBIcon far icon="trash-alt" className="red-text pr-3" />
        </MDBBtn>
        <MDBModal isOpen={this.state.open} toggle={this.handleClose}>
        <MDBModalHeader toggle={this.handleClose}>Are you sure you want to delete this article?</MDBModalHeader>
        <MDBModalBody>
        Article name: {this.props.articleName} <br />
        Article Coordinates:{this.props.articleCoordinates}
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.handleClose}>Close</MDBBtn>
          <MDBBtn color="primary" onClick={this.deleteArticle}>Delete article</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </Fragment>
    );
  }
}

DeleteArticle.propTypes = {
  deleteArticle: PropTypes.func.isRequired,
  articleId: PropTypes.number.isRequired,
};

export default connect(null, { deleteArticle })(DeleteArticle);
import React, { Component, Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import { MDBContainer,MDBRow, MDBBtn, MDBModal, MDBModalBody, 
  MDBModalHeader, MDBModalFooter, MDBIcon} from 'mdbreact';

import { connect } from 'react-redux';
import { deleteUser } from '../../redux/actions';

class DeleteUser extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  deleteUser = () => {
    this.props.deleteUser(this.props.starId);
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <MDBBtn rounded outline size="sm" onClick={this.handleOpen}><MDBIcon far icon="trash-alt" className="red-text pr-3" /></MDBBtn>
        <MDBModal isOpen={this.state.open} toggle={this.handleClose} size="lg">
        <MDBModalHeader toggle={this.handleClose}>Are you sure you want to delete this star?</MDBModalHeader>
        <MDBModalBody>
         <MDBRow>
         User name: {this.props.starName} <br />
         User Coordinates:{this.props.starCoordinates}
        </MDBRow>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.handleClose}>Close</MDBBtn>
          <MDBBtn color="primary" onClick={this.deleteUser}>Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
      </Fragment>
    );
  }
}

DeleteUser.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  starId: PropTypes.number.isRequired,
};

export default connect(null, { deleteUser })(DeleteUser);
import React, { Component, Fragment } from 'react';
import Validator from '../../utils/validation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendAnInvite } from '../../redux/actions';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class SendInvite extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    confirmEmail:'',
    emailError: '',
    confirmEmailError: '',
    errors: {},
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.clearErrors();
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      email, name, phone
    } = this.state;

    const emailError = Validator.validateEmail({ email });
    if (emailError) {
      return this.displayError(emailError, 'emailError');
    }

    const firstEmail = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirmEmail').value;

    const confirmEmailError = (firstEmail !== confirmEmail);

    if (confirmEmailError) {
      return this.displayError(confirmEmailError, 'confirmEmailError');
    }

    const sendInviteData = {
      name, email, phone
    };
    this.props.sendAnInvite(sendInviteData, this.props.history);
  };

  displayError = (error, key) => {
    this.setState({ [key]: error });
  };

  clearErrors = () => this.setState(prevState => ({
    ...prevState,
    emailError: '',
    confirmEmailError: '',
  }))

  render() {
    const {
     phone, name, open, email, confirmEmailError, confirmEmail,
    } = this.state;


    return (
      <Fragment>
        <Button variant="primary btn-block mb-2" className="mr-2" onClick={this.handleOpen}>
         Add new user
      </Button>
        <Modal show={open} onHide={this.handleClose} size="lg">
          <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Create new user
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <Form className='p-3 box'>
					<p className='text-center small mb-4'>
						Fill the form to add new user 
          </p>
          <Form.Group>
						<Form.Label>Full names</Form.Label>
						<Form.Control
							type='text'
							name="name"
							placeholder='Enter full names'
							value={name}
              onChange={this.handleChange}
              required
						/>
          </Form.Group>
          <Form.Group>
						<Form.Label>Phone Number</Form.Label>
						<Form.Control
							type='text'
							name="phone"
							placeholder='Enter phone number'
							value={phone}
              onChange={this.handleChange}
              required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Email address</Form.Label>
            <Form.Control
              id="email"
							type='email'
							name="email"
							placeholder='Enter email'
							value={email}
              onChange={this.handleChange}
              required
						/>
          </Form.Group>
          <Form.Group>
          <Form.Label>Confirm Email</Form.Label>
          <Form.Control
            type='email'
            id="confirmEmail"
            name="confirmEmail"
            placeholder='Enter email'
            value={confirmEmail}
            onChange={this.handleChange}
            required
          />
        </Form.Group>
        </Form>
        <div>
        {confirmEmailError ? (
          <div className="error">
           Email Not match!
          </div>
        ) : false}
      </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="secondary" onClick={this.handleClose}>Close</Button>
          <Button 	
          variant='primary'
          type='submit'
          className='col-sm-4 btn-block float-right'
          onClick={this.handleSubmit}>Send invitation</Button>
        </Modal.Footer>
        </Modal>
     </Fragment>   
    );
  }
}

SendInvite.propTypes = {
  sendAnInvite: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI,
});

const mapActionToProps = {
  sendAnInvite,
};

export default connect(mapStateToProps, mapActionToProps)(SendInvite);

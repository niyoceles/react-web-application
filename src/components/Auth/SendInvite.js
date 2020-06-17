import React, { Component } from 'react';
import {
  MDBCol,
  MDBInput,
  MDBBtn,
} from 'mdbreact';
import Validator from '../../utils/validation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendAnInvite } from '../../redux/actions';

class SendInvite extends Component {
  state = {
    names: '',
    email: '',
    confirmEmail:'',
    emailError: '',
    confirmEmailError: '',
    errors: {},
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.clearErrors();
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      email, names
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
      email, names,
    };
    this.props.sendAnInvite(sendInviteData);
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
      emailError, email, confirmEmailError, confirmEmail,
    } = this.state;


    return (
          <MDBCol md='12' className="pull-right">
            <form onSubmit={this.handleSubmit}>
              <p className='h4 text-center mb-8'>Fill the form below to send an invitation account</p>
              <div className='grey-text'>
                <MDBInput 
                id='names'
                name='names'
                label="Type names" 
                icon="user" 
                group 
                type="text" 
                validate error="wrong"
                success="right"
                value={this.state.names}
                onChange={this.handleChange}
                required
                />
                <MDBInput
                  id='email'
                  name='email'
                  label='Type an email'
                  icon='envelope'
                  group
                  type='text'
                  validate
                  error='wrong'
                  success='right'
                  value={email}
                  onChange={this.handleChange}
                  required
                />
                <MDBInput 
                id="confirmEmail"
                name="confirmEmail"
                label="Confirm your email" 
                icon="exclamation-triangle" 
                group  
                validate
                type='text'
                error="wrong" 
                success="right"
                value={confirmEmail}
                onChange={this.handleChange}
                required 
                />
              </div>
              <div className='text-center'>
                <div>
                {confirmEmailError ? (
                  <div className="error">
                   Email Not match!
                  </div>
                ) : false}
                {emailError && <div className="error">{emailError}</div>}
              </div>
                <MDBBtn color='primary' type='submit'>
                  Send&nbsp;Invitation
                </MDBBtn>
                <br />
              </div>
            </form>
          </MDBCol>
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

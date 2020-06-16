import React, { Component } from 'react';
import {
  MDBCol,
  MDBInput,
  MDBBtn,
} from 'mdbreact';
import { Link } from 'react-router-dom';
import Validator from '../../utils/validation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { resetPassword } from '../../redux/actions';

class ResetPassword extends Component {
  state = {
    password: '',
    confirmPassword:'',
    passwordError: '',
    confirmPasswordError: '',
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
      password, names
    } = this.state;

    const passwordError = Validator.validatePassword({ password });
    if (passwordError) {
      return this.displayError(passwordError, 'passwordError');
    }

    const firstPassword = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const confirmPasswordError = (firstPassword !== confirmPassword);

    if (confirmPasswordError) {
      return this.displayError(confirmPasswordError, 'confirmPasswordError');
    }

    const sendInviteData = {
      password, names,
    };
    this.props.ResetPassword(sendInviteData);
  };

  displayError = (error, key) => {
    this.setState({ [key]: error });
  };

  clearErrors = () => this.setState(prevState => ({
    ...prevState,
    passwordError: '',
    confirmPasswordError: '',
  }))

  render() {
    const {
      passwordError, password, confirmPasswordError, confirmPassword,
    } = this.state;


    return (
          <MDBCol md='6' className="pull-right">
            <form onSubmit={this.handleSubmit}>
              <p className='h4 text-center mb-8'>Reset your password</p>
              <div className='grey-text'>
                <MDBInput 
                id='password'
                name='password'
                label="Type new password" 
                icon="user" 
                group 
                type="password" 
                validate error="wrong"
                success="right"
                value={password}
                onChange={this.handleChange}
                required
                />
                <MDBInput 
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm your password" 
                icon="exclamation-triangle" 
                group  
                validate
                type='text'
                error="wrong" 
                success="right"
                value={confirmPassword}
                onChange={this.handleChange}
                required 
                />
              </div>
              <div className='text-center'>
                <div>
                {confirmPasswordError ? (
                  <div className="error">
                   Password Not match!
                  </div>
                ) : false}
                {passwordError && <div className="error">{passwordError}</div>}
              </div>
                <MDBBtn color='primary' type='submit'>
                  Reset&nbsp;Password
                </MDBBtn>
                <br />
                <small>
                <p className='h4 text-center mb-8'>
                   or  
                  <br />
                 back to <Link to='/login'>Login</Link>
                </p>
                </small>
              </div>
            </form>
          </MDBCol>
    );
  }
}

ResetPassword.propTypes = {
  resetPassword: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI,
});

export default connect(mapStateToProps, {resetPassword})(ResetPassword);

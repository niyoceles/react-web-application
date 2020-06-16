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
import { forgetPassword } from '../../redux/actions';

class ForgetPassword extends Component {
  state = {
    email:'',
    emailError: '',
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

    const requestChangePwd = {
      email,
    };
    this.props.forgotPassword(requestChangePwd);
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
      emailError, email,
    } = this.state;


    return (
          <MDBCol md='6' className="pull-right">
            <form onSubmit={this.handleSubmit}>
              <p className='h4 text-center mb-8'>Forget Password</p>
              <div className='grey-text'>
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
                
              </div>
              <div className='text-center'>
                <div>
                {emailError && <div className="error">{emailError}</div>}
                </div>
                <MDBBtn color='primary' type='submit'>
                  Submit &nbsp; Email
                </MDBBtn>
                <br />
                <small>
                <p className='h4 text-center mb-8'>
                   or 
                  <br />
                  Login <Link to='/login'>here</Link>
                </p>
                </small>
              </div>
            </form>
          </MDBCol>
    );
  }
}

ForgetPassword.propTypes = {
  forgetPassword: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI,
});

const mapActionToProps = {
  forgetPassword,
};

export default connect(mapStateToProps, mapActionToProps)(ForgetPassword);

import React, { Component } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
} from 'mdbreact';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
  };

  static getDerivedStateFromProps(props) {
    if (props.UI.errors) {
      return { errors: props.UI.errors };
    }
  }

  handleSignin = event => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(userData);
    //from action
    this.props.loginUser(userData, this.props.history);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    // const {
    //   UI: { loading },
    // } = this.props;
    const errors = this.state.errors;

    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md='12'>
            <form onSubmit={this.handleSignin}>
              <div className='dark-text black-text'>
                <MDBInput
                  id='email'
                  name='email'
                  label='Type your email'
                  icon='envelope'
                  containerClass="text-left"
                  group
                  type='email'
                  validate
                  error='wrong'
                  success='right'
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
                <MDBInput
                  id='password'
                  name='password'
                  label='Type your password'
                  icon='lock'
                  group
                  type='password'
                  value={this.state.password}
                  onChange={this.handleChange}
                  validate
                  required
                />
              </div>
              <div className='text-center'>
                {errors.general && (
                  <div className="error">
                    {errors.general}
                  </div>
                )}
                <MDBBtn color='primary btn-block' type='submi'>
                  Login
                </MDBBtn>
                <div class='mt-4 grey-text'>
                  <span class='pull-left'>
                    Forgot password ? <Link to='/forget'>here</Link>
                  </span>
                </div>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI,
});

const mapActionToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapActionToProps)(Login);

import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Login from '../components/Auth/Login';

const LoginPage = () =>{
  const backgrdImage = {
    backgroundImage: `url(${'https://cdn.dribbble.com/users/992274/screenshots/6206904/office_kit8-net.png'})`,
  };
    return (
      <div className="d-flex">
        <div className="form-wrap d-flex">
          <Login/>
        </div>
        <div className="img-wrap" style={backgrdImage} />
      </div>
    );
  }

export default LoginPage;
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Login from '../components/Auth/Login';

const LoginPage = () =>{
    return (
      <div style={{ background: '#d2d6de' }}>
        <Container>
        <Row className="justify-content-center p-5">
            <Col sm={5}>
              <h2 class='mb-3 mt-5 text-center'><b>NURC</b> LOGIN</h2>
              <div style={{ background: '#fafafa' }} class='shadow-sm mt-5 mb-5 p-5'><Login/></div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

export default LoginPage;
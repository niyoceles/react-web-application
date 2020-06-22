import React, { Fragment } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from 'mdbreact';
import Navbar from '../layouts/Navbar';
import CreatePassword from '../components/Auth/CreatePassword';

const CreatePasswordPage = () => {
  return (
    <Fragment>
      <Navbar />
      <MDBContainer style={{ padding: '1rem' }}>
        <MDBRow>
          <MDBCol md='6' className='pull-left'>
            <MDBCard style={{ width: '25rem' }}>
              <MDBCardImage
                className='img-fluid'
                src='https://mdbootstrap.com/img/Photos/Others/images/43.jpg'
                waves
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn href='#'>MDBBtn</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <CreatePassword />
        </MDBRow>
      </MDBContainer>
    </Fragment>
  );
};
export default CreatePasswordPage;

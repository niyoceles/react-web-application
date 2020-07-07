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
import AdminLayout from '../layouts/AdminLayout';
import CreateArticle from '../components/Articles/CreateArticle';

const CreateArticlePage = () => {
  return (
    <Fragment>
      <AdminLayout>
      <MDBContainer style={{ padding: '1rem' }}>
        <MDBRow>
          <MDBCol md='4' className='pull-left'>
            <MDBCard style={{ width: '20rem' }}>
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
          <CreateArticle />
        </MDBRow>
      </MDBContainer>
      </AdminLayout>
    </Fragment>
  );
};
export default CreateArticlePage;

import React, { Component,Fragment } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText,
  MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";
import Navbar from '../layouts/Navbar'
import SendInvite from '../components/Auth/SendInvite';

class SendInvitePage extends Component{
  state={
    modal4: false,
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }
  render(){
  return (
    <Fragment>
    <Navbar/>
    <MDBContainer style={{ padding: "1rem" }}>
        <MDBRow>
        <MDBCol md="6" className="pull-left">
          <MDBCard style={{ width: "25rem" }}>
            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make
                up the bulk of the card&apos;s content.
              </MDBCardText>
              <MDBBtn href="#">MDBBtn</MDBBtn>
              <MDBBtn color="primary" onClick={this.toggle(4)}>Send Invitayion </MDBBtn>
            </MDBCardBody>
          </MDBCard>
          </MDBCol>
        </MDBRow>
      <MDBModal isOpen={this.state.modal4} toggle={this.toggle(4)} size="lg">
        <MDBModalHeader toggle={this.toggle(4)}>Send invitation account</MDBModalHeader>
        <MDBModalBody>
         <MDBRow>
        <SendInvite/>
        </MDBRow>
        </MDBModalBody>
      </MDBModal>
      </MDBContainer>
    </Fragment>
  )
}
}
export default SendInvitePage;

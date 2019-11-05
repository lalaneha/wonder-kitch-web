import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';

class CardExample extends Component {
  render() {
    return (
      <div className= "text-center">
      <h2>Meet our team!</h2>
      <MDBRow>
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg" />
            <MDBCardBody cascade>
              <MDBCardTitle>Alexandria Farris</MDBCardTitle>
              <MDBCardText> Backend team</MDBCardText>
              <MDBBtn href="https://www.linkedin.com/in/alexandria-farris-40708839/">LinkedIn</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg" />
            <MDBCardBody cascade>
              <MDBCardTitle>Neha Lal</MDBCardTitle>
              <MDBCardText> Gitmaster and Frontend</MDBCardText>
              <MDBBtn href="#">MDBBtn</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg" />
            <MDBCardBody cascade>
              <MDBCardTitle>Rachel Jones</MDBCardTitle>
              <MDBCardText>Front End and Project Manager</MDBCardText>
              <MDBBtn href="#">MDBBtn</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src="../components/Images/amjed.jpg" />
            <MDBCardBody cascade>
              <MDBCardTitle>Amjed Ayoud</MDBCardTitle>
              <MDBCardText>Backend</MDBCardText>
              <MDBBtn href="https://www.linkedin.com/in/amjed-ayoub-7597935b/">LinkedIn</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg" />
            <MDBCardBody cascade>
              <MDBCardTitle>Wenhou</MDBCardTitle>
              <MDBCardText> Backend</MDBCardText>
              <MDBBtn href="#">MDBBtn</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        
      </MDBRow>
      </div>
    )
  }
}

export default CardExample;

//add form and images of team members


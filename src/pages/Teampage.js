import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';

class CardExample extends Component {
  render() {
    return (
      <div className= "teammembers">
      <h2 align ="center">Meet our team!</h2>
      <MDBRow>
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src="alex.jpg" />
            <MDBCardBody cascade>
              <MDBCardTitle>
              <p align="center">Alexandria Farris</p></MDBCardTitle>
              <MDBCardText> 
              <font size="4">Back-End</font></MDBCardText>
              <MDBBtn href="https://www.linkedin.com/in/alexandria-farris-40708839/">LinkedIn</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src="neha.jpg" />
            <MDBCardBody cascade>
              <MDBCardTitle>
              <p align="center">Neha Lal</p></MDBCardTitle>
              <MDBCardText> 
              <font size="4">Gitmaster and Front-end and Back-end</font></MDBCardText>
              <MDBBtn
              href="https://www.linkedin.com/in/neha-lal-bb8639189/">LinkedIn</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src="rachel.jpg"width="400px" height="420px"/>
            <MDBCardBody cascade>
              <MDBCardTitle>
              <p align="center">Rachel Jones</p></MDBCardTitle>
              <MDBCardText>
              <font size="4">Front-end and Project Manager</font></MDBCardText>
              <MDBBtn href="https://www.linkedin.com/in/rachel-jones-99780531/">LinkedIn</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src="amjed.jpg" width="500px" height="500px"/>
            <MDBCardBody cascade>
              <MDBCardTitle>
              <p align="center">Amjed Ayoub</p></MDBCardTitle>
              <MDBCardText>
              <font size="4">Back-end</font></MDBCardText>
              <MDBBtn href="https://www.linkedin.com/in/amjed-ayoub-7597935b/">LinkedIn</MDBBtn>
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


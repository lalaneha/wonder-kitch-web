import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const FormPage = () => {
  return (
    <div className="signups">  
    <MDBContainer className="signupcc">
      <MDBRow>
        <MDBCol>
          <form>
            <p className="top text-center mb-4">Sign up</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
            </label>
            <input
              type="text"
              placeholder="Name"
              id="defaultFormRegisterNameEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
            </label>
            <input
              type="email"
              placeholder="Email (this will also be your Username)"
              id="defaultFormRegisterEmailEx"
              className="form-control"
            />
             <br />
            <label
              htmlFor="defaultFormRegisterPasswordEx" className="grey-text">

            </label>
            <input
              type="password"
              placeholder="Password"
              id="defaultFormRegisterPasswordEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormRegisterServingEx" className="grey-text">
            </label>
            <input
              type="text"
              placeholder="Serving Size (1 member of your family is 1 serving size)"
              id="defaultFormRegisterServingEx"
              className="form-control"
            />
            <div className="text-center mt-4">
              <MDBBtn color="unique" type="submit">
                Register
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
};

export default FormPage;
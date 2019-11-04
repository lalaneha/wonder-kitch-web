import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBModalFooter, MDBIcon, MDBCardHeader, MDBBtn, MDBInput} from "mdbreact";
import "./style.css";

function Loginform() {
return (
    //anything added has to be after retrun
<MDBContainer className="frontbox">
      <MDBRow>
        <MDBCol md="8">
          <MDBCard className="logincc">
            <MDBCardBody>
              <MDBCardHeader className="form-header deep-blue-gradient rounded">
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Please login to continue
                </h3>
              </MDBCardHeader>
              <form>
                <div className="grey-text">
                  <MDBInput
                    label="Type your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  /> 
                  <MDBInput
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </div>

              <div className="loginbbtn text-center mt-4">
                <MDBBtn href= "/home"
                  color="light-blue"
                  className="mb-3"
                  type="submit"
                >
                  Login
                </MDBBtn>
              </div>
              </form>
              <MDBModalFooter>
                <div className="signup font-weight-light">
                <MDBBtn href= "/signup"
                  color="grey"
                  className="mb-3"
                  type="submit"
                >
                  Not a member? Click here to Sign up!
                </MDBBtn>
                  
                </div>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
//dont remove below
);
}

export default Loginform;

// import React from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';

// const FormPage = () => {
//   return (
//     <MDBContainer>
//       <MDBRow>
//         <MDBCol md="6">
//           <MDBCard>
//             <div className="header pt-3 grey lighten-2">
//               <MDBRow className="d-flex justify-content-start">
//                 <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
//                   Log in
//                 </h3>
//               </MDBRow>
//             </div>
//             <MDBCardBody className="mx-4 mt-4">
//               <MDBInput label="Your email" group type="text" validate />
//               <MDBInput
//                 label="Your password"
//                 group
//                 type="password"
//                 validate
//                 containerClass="mb-0"
//               />
//               <p className="font-small grey-text d-flex justify-content-end">
//                 Forgot
//                 <a
//                   href="#!"
//                   className="dark-grey-text font-weight-bold ml-1"
//                 >
//                   Password?
//                 </a>
//               </p>
//               <div className="text-center mb-4 mt-5">
//                 <MDBBtn
//                   color="danger"
//                   type="button"
//                   className="btn-block z-depth-2"
//                 >
//                   Log in
//                 </MDBBtn>
//               </div>
//               <p className="font-small grey-text d-flex justify-content-center">
//                 Don't have an account?
//                 <a
//                   href="#!"
//                   className="dark-grey-text font-weight-bold ml-1"
//                 >
//                   Sign up
//                 </a>
//               </p>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// };

// export default FormPage;
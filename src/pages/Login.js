import React, {Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBModalFooter, MDBIcon, MDBCardHeader, MDBBtn, MDBInput} from "mdbreact";
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { Link } from "react-router-dom";
// import fakeAuth from '../utils/fakeAuth';

class Login extends Component {
  // Setting the component's initial state
  state = {
    loguser: "",
    logemail: "",
    isAuthenticated: false
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log("test")

    axios.post("http://localhost:3000/login", {logemail: this.state.logemail,  logpassword: this.state.logpassword})
      .then(res => {
        console.log("look here", res.data)
        // This tells the UI we've authenticated. See fakeAuth.js
        localStorage.setItem("userID", res.data._id)
        if (res.status === "error") {
          throw new Error(res.data.message);
        }
        // React redirect to /home route.
        this.props.history.push("/home");
      })
      .catch(err => this.setState({ error: err.message }));
    this.setState({
      user: "",
      email: "",
    });
  };

  render() {
  return (
  <div className="logincontainer">
  <h1>Wonder Kitch</h1>
  <Card className="aboutapp">
    <Card.Body>
      <Card.Text>
      You no longer need to spend hours staring at the items in your fridge trying to figure out what you can make with them. Just input the items that you already have in your fridge and we will help you come up with meal ideas!
      </Card.Text>
    </Card.Body>
  </Card>
  <MDBContainer>
      <MDBRow>
        <MDBCol md="8" sm="10" className="offset-md-3">
          <MDBCard className="logincc">
            <MDBCardBody>
              <MDBCardHeader className="form-header deep-blue-gradient rounded">
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Please login to continue
                </h3>
              </MDBCardHeader>
              <form onSubmit={this.handleFormSubmit}>
                <div className="grey-text">
                  <MDBInput
                    label="Type your email"
                    onChange={this.handleInputChange}
                    value={this.state.user}
                    icon="envelope"
                    group
                    id="user"
                    type="email"
                    name="logemail"
                    validate
                    error="wrong"
                    success="right"
                  /> 
                  <MDBInput
                    label="Type your password"
                    onChange={this.handleInputChange}
                    value={this.state.password}
                    icon="lock"
                    group
                    id="password"
                    type="password"
                    name="logpassword"
                    validate
                  />
                </div>

              <div className="loginbbtn text-center mt-4">
                <MDBBtn 
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
                  className="mb-2"
                  type="submit"
                >
                Click here to Sign up!
                </MDBBtn>
                  
                </div>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  <Card className="aboutus">
        <Card.Body>
        <Card.Text>
        <Link
              to="/teampage"
              className={window.location.pathname === "/teampage"}
            >
            <p>Our team is passionate about making your life simpler. Click here to learn more about us!</p>
          </Link>
          </Card.Text>
          </Card.Body>
          </Card>
    </div>
  );
  }
};

export default Login;



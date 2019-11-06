import React, { Component }  from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import axios from "axios";
// import fakeAuth from '../utils/fakeAuth';


class FormPage extends Component {
  // Setting the component's initial state
  state = {
    user: "",
    email: "",
    password: "",
    servingSize: ""
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
    axios.post("http://localhost:3000/login", {username: this.state.user, email: this.state.email,  password: this.state.password, passwordConf: this.state.password})
    .then(res => {
      if (res.status === "error") {
        throw new Error(res.data.message);
      }
      console.log("signup")
      console.log(res)
      // Tell the UI we've authenticated.
      localStorage.setItem("userID", res.data._id)
      // React redirect to /home route.
      this.props.history.push("/home");
    })
    .catch(err => this.setState({ error: err.message }));

    
    this.setState({
      user: "",
      email: "",
      password: "",
      servingSize: ""
    });
  };

  render() {
  return (
    <div className="signups">  
    <MDBContainer className="signupcc">
      <MDBRow>
        <MDBCol>
        <form onSubmit={this.handleFormSubmit}>
            <p className="top text-center mb-4">Sign up</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
            </label>
            <input
              type="text"
              onChange={this.handleInputChange}
              value={this.state.user}
              placeholder="Name"
              id="user"
              name="user"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
            </label>
            <input
              type="email"
              onChange={this.handleInputChange}
              value={this.state.email}
              placeholder="Email (this will also be your Username)"
              id="email"
              name="email"
              className="form-control"
            />
             <br />
            <label
              htmlFor="defaultFormRegisterPasswordEx" className="grey-text">

            </label>
            <input
              type="password"
              onChange={this.handleInputChange}
              value={this.state.password}
              placeholder="Password"
              id="password"
              name="password"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormRegisterServingEx" className="grey-text">
            </label>
            <input
              type="text"
              onChange={this.handleInputChange}
              value={this.state.servingSize}
              placeholder="Serving Size (1 member of your family is 1 serving size)"
              id="servingSize"
              name="servingSize"
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
  }
};

export default FormPage;
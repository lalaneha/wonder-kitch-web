import React, {Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBModalFooter, MDBIcon, MDBCardHeader, MDBBtn, MDBInput} from "mdbreact";
import Button from 'react-bootstrap/Button'
import axios from "axios";
import fakeAuth from '../utils/fakeAuth';





class Logout extends Component {
    // Setting the component's initial state
    state = {
        navigate:false,
    };

    logout=()=>{
        localStorage.clear("token")
        this.setState({navigate:true});
    }

    handleInputChange = event => {
        const { name, value} =event.target;
        this.setState({
            [name]:value
        });
    };


  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log("test")

    axios.post("http://localhost:3000/logout", {})
    .then(res => {
      if (res.status === "error") {
        throw new Error(res.data.message);
      }
      console.log(res)
      this.props.history.push("/logout");
    })
    .catch(err => this.setState({ error: err.message }));
};

render() {
    return (    
    
    <div className="logoutcontainer">
    <h1>Thank you for visiting!</h1>

    </div>
    
    )}
    }

    
    export default Logout;
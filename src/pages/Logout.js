import React, {Component} from "react";
import axios from "axios";
import fakeAuth from '../utils/fakeAuth';
import Card from 'react-bootstrap/Card';


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


 componentDidMount() {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    // event.preventDefault();
    console.log("test")

    axios.post("http://localhost:3000/logout", {})
    .then(res => {
      console.log("look here", res.data)
    //   localStorage.setItem("userID", res.data._id)
      localStorage.removeItem("userID");
      if (res.status === "error") {
        throw new Error(res.data.message);
      }
      // Tell the UI we've authenticated.
      fakeAuth.isAuthenticated = false;
      // React redirect to /home route.
    //   this.props.history.push("/login");
    });
};
render() {
    return (    
    <div className="logoutcontainer">
    <Card className="aboutapp">
    <Card.Body>
      <h1>Thank you for visitng!</h1>
    </Card.Body>
  </Card>
    </div>
    );
    }
};
    
    export default Logout;
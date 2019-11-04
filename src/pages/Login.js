import React from "react";
import Loginform from "../components/Loginform";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


const Login = () => {
  return (
  <div className="logincontainer">>
  <h1>Wonder Kitch</h1>
  <Card className="aboutapp">
    <Card.Body>
      <Card.Text>
      You no longer need to spend hours staring at the items in your fridge trying to figure out what you can make with them. Just input the items that you already have in your fridge and we will help you come up with meal ideas!
      </Card.Text>
    </Card.Body>
  </Card>
  <Loginform />
  <Card className="aboutus">
    <Card.Body>
      <Card.Text>
      <Button variant="link" href="/Teampage">Our team is passionate about making your life simpler. Click here to learn more about us!</Button>
      </Card.Text>
    </Card.Body>
  </Card>
    </div>
  );
};

export default Login;



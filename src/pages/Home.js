import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


  function Home() {
    return (
      <div className="homecontainer">
      <h1>What would you like to do?</h1>
        <div className="inv">
        <Card className="inv2">
        <Card.Body>
        <Card.Text>
        <Link
              to="/inventory"
              className={window.location.pathname === "/inventory"}
            >
            <p>View/Update Inventory</p>
          </Link>
          </Card.Text>
          </Card.Body>
          </Card>
          <Card className="inv2">
        <Card.Body>
        <Card.Text>
            <Link
              to="/search"
              className={window.location.pathname === "/search"}
            >
              <p>Recipe Search!</p>
            </Link>
            </Card.Text>
          </Card.Body>
          </Card>
          </div>
          </div>
    );
  }

export default Home;

import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


  function Home() {
    return (
      <div>
        <h2 className="text-center">What would you like to do</h2>
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
              <p>Search Recipes by Name or by Key ingredients</p>
            </Link>
            </Card.Text>
          </Card.Body>
          </Card>
          <Card className="inv2">
        <Card.Body>
        <Card.Text>
            <Link
              to="/#"
              className={window.location.pathname === "/#"}
            >
              <p>View recipes based on what’s in your fridge</p>
            </Link>
            </Card.Text>
          </Card.Body>
          </Card>
          </div>
          </div>
    );
  }

export default Home;

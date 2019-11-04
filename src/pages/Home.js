import React from "react";
import Button from 'react-bootstrap/Button'


  function Home() {
    return (
      <div className="homebutton">
        <h2 className="text-center">What would you like to do</h2>
      <Button variant="outline-success homebb" href="/inventory">View/Update inventory</Button>
      <Button variant="outline-success homebbv" href="/search">Search for recipes with key ingredients</Button>
      <Button variant="outline-success homebbv" href="#">View recipes based on what’s in your fridge</Button>
      </div>
    );
  }

export default Home;

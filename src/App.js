
//calling all pages 
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Inventory from "./pages/Inventory";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
      <Navbar />
        <Wrapper>
          <Route exact path="/" component={Login} />
          <Route exact path="/about" component={Home} />
          <Route exact path="/discover" component={Inventory} />
          <Route exact path="/search" component={Search} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

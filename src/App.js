
//calling all pages 
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Inventory from "./pages/Inventory2";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Teampage from "./pages/Teampage";
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
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/teampage" component={Teampage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/search" component={Search} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

//calling all pages 
import React from "react";
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Inventory2 from "./pages/Inventory2";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Signup from "./pages/Signup";
import Teampage from "./pages/Teampage";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import fakeAuth from "./utils/fakeAuth";




function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}


function App() {
  return (
    <Router>
      <div>
      <Navbar />
        <Wrapper>
          <Route exact path="/">
            <Redirect to = {{pathname:"/login"}} />
          </Route>
          <Route exact path = "/login" component = {Login}/>
          <Route exact path="/signup" component={Signup} />
          <Route exact path = "/logout" component = {Logout}/>
          <Route exact path="/teampage">
            <Teampage />
          </Route>
          <PrivateRoute exact path="/home">
            <Home />
          </PrivateRoute>
          <PrivateRoute exact path="/inventory">
            <Inventory2 />
          </PrivateRoute>
          <PrivateRoute exact path="/search">
            <Search />
          </PrivateRoute>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

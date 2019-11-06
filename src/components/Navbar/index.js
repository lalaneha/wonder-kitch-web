import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light justify-content-end navbar-top">
      <Link className="navbar-brand" to="/">
        Wonder Kitch
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/home"
              className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/inventory"
              className={window.location.pathname === "/inventory" ? "nav-link active" : "nav-link"}
            >
              Inventory
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/search"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/logout"
              className={window.location.pathname === "/logout" ? "nav-link active" : "nav-link"}
            >
              LogOut
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

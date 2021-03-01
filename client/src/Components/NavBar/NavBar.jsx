import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        

        <button
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>

          <Link className="navbar-item" to="/sightings/new">
            Add New
          </Link>

          <Link className="navbar-item" to="/sightings">
            View All
          </Link>

		  <Link className="navbar-item" to="/">
          SpookMe
        </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button className="button">Log In</button>
              <Link className="button" to="/users/new">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          Lead Manager
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mt-2">
            <li className="nav-item">
              <NavLink
                activeStyle={{
                  background: "red",
                  color: "white"
                }}
                to="/register"
                className="nav-link"
              >
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={{
                  background: "red",
                  color: "white"
                }}
                to="/login"
                className="nav-link"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

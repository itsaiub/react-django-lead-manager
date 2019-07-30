import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../store/actions/authAction";

const Header = ({ isAuthenticated, user, logout }) => {
  const authLinks = (
    <ul className="navbar-nav ml-auto mt-2">
      <span className="navbar-text mr-3">
        <strong>{user ? `Welcome ${user.username}` : ""}</strong>
      </span>
      <li className="nav-item">
        <button
          className="nav-link btn btn-info btn-sm text-light"
          onClick={() => logout()}
        >
          Logout
        </button>
      </li>
    </ul>
  );

  const guestLinks = (
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
  );

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
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
  logout: PropTypes.func
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logoutUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

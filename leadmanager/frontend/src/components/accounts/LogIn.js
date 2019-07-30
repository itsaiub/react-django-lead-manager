import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { loginUser } from "../../store/actions/authAction";

const LogIn = ({ login, isAuthenticated }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    login(userName, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="col-md-6 m-auto">
      <div className="card card-body mt-5">
        <h2 className="text-center">Login</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="form-control"
              onChange={e => setUserName(e.target.value)}
              value={userName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </div>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

LogIn.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => dispatch(loginUser(username, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);

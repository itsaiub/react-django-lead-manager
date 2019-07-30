import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { registerUser } from "../../store/actions/authAction";
import { createMessage } from "../../store/actions/messagesAction";

const Register = ({ isAuthenticated, register, errorMsg }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      errorMsg({ passwordNotMatch: "Passwords not matched" });
    } else {
      const newUser = { userName, password, email };
      register(newUser);
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="col-md-6 m-auto">
      <div className="card card-body mt-5">
        <h2 className="text-center">Register</h2>
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
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              onChange={e => setEmail(e.target.value)}
              value={email}
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
            <label htmlFor="password2">Confirm Password</label>
            <input
              type="password"
              name="password2"
              id="password2"
              className="form-control"
              onChange={e => setPassword2(e.target.value)}
              value={password2}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </div>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: user => dispatch(registerUser(user)),
    errorMsg: msg => dispatch(createMessage(msg))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);

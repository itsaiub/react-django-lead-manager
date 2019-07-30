import React, { useState } from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    console.log("submit");
  };

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

export default LogIn;

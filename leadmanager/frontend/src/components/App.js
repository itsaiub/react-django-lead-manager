import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";
import Alerts from "./layout/Alerts";
import LogIn from "./accounts/LogIn";
import Register from "./accounts/Register";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Alerts />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={LogIn} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Fragment>
  );
};

export default App;

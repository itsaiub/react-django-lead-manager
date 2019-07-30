import React, { Fragment, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";
import Alerts from "./layout/Alerts";
import LogIn from "./accounts/LogIn";
import Register from "./accounts/Register";
import PrivateRoute from "./common/PrivateRoute";
import store from "../store/index";

import { loadUser } from "../store/actions/authAction";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Fragment>
      <Header />
      <Alerts />
      <div className="container">
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path="/login" component={LogIn} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Fragment>
  );
};

export default App;

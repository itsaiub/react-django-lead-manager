import React, { Fragment } from "react";
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";
import Alerts from "./layout/Alerts";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Alerts />
      <div className="container">
        <Dashboard />
      </div>
    </Fragment>
  );
};

export default App;

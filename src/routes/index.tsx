import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../pages/Login/LoginPage";
import Settings from "../pages/Settings/SettingsPage";
import Home from "../pages/Home/HomePage";
import history from "./history";
// import Route from "./Route";
import Private from "./Private";

export default function Routes() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" component={Login} />
        <Private path="/settings" component={Settings} />
        <Private path="/home" component={Home} />
      </Switch>
    </ConnectedRouter>
  );
}

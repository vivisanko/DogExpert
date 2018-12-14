import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../../pages/main/Main";
import Settings from "../../pages/settings/Settings";

const AppRouter = () => (
  <Switch>
    <Route path="/settings" component={Settings} />
    <Route path="/" exact component={Main} />
  </Switch>
);
export default AppRouter;

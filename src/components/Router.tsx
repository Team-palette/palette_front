import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// components
import Home from "../page/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

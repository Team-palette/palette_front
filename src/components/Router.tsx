import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// components
import Home from "../page/Home";
import Tester from "../page/Tester";
import WritePost from "../page/WritePost";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/write" component={WritePost} exact />
        <Route path="/develop" component={Tester} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// components
import Intro from "../page/Intro";
import Home from "../page/Home";
import WritePost from "../page/WritePost";
import Tester from "../page/Tester";
import Feed from "../page/Feed";
import Search from "../page/Search";
import MyPage from "../page/MyPage";
import Login from "../page/Login";
import Join from "../page/Join";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Intro} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/join" component={Join} exact />
        <Route path="/mypage" component={MyPage} exact />
        <Route path="/myhome" component={Home} exact />
        <Route path="/home/:userId" component={Home} exact />
        <Route path="/write" component={WritePost} exact />
        <Route path="/feed" component={Feed} exact />
        <Route path="/search" component={Search} exact />
        <Route path="/develop" component={Tester} exact />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

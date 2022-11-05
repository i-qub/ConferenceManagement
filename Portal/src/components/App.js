import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// components
import Layout from "./Layout";

// pages
import Error from "../pages/error";
import Login from "../pages/login";

// routes
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path="/" component={Login} />
        <PrivateRoute component={Layout} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}
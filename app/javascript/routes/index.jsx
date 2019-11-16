import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Book from "../components/books";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Book} />
    </Switch>
  </Router>
);

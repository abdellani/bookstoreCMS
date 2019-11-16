import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Book from "../components/books";
import Navbar from "../components/navbar";

export default (
  <div>
    <div>
      <Navbar />
    </div>
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Book} />
        </Switch>
      </Router>
    </div>
  </div>
);

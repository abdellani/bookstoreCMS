import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Book from "../components/books/";
import CreateBook from "../components/books/create";
import Navbar from "../components/navbar";

export default (
  <div>
    <div>
      <Navbar />
    </div>
    <div>
      <Router>
        <Switch>
          <Route path="/books" exact component={Book} />
        </Switch>
        <Switch>
          <Route path="/books/new" exact component={CreateBook} />
        </Switch>
      </Router>
    </div>
  </div>
);

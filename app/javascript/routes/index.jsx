import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Book from "../components/books/";
import CreateBook from "../components/books/create";
import Navbar from "../components/navbar";
import BookShow from "../components/books/show";
import UpdateBook from "../components/books/edit";

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
        <Switch>
          <Route path="/books/show/:id" exact component={BookShow} />
        </Switch>
        <Switch>
          <Route
            path="/books/update/:id"
            exact
            render={({ match }) => <UpdateBook match={match} />}
          ></Route>
        </Switch>
      </Router>
    </div>
  </div>
);

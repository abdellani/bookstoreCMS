import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Book from "../components/books/";
import CreateBook from "../components/books/create";
import Navbar from "../components/navbar";
import BookShow from "../components/books/show";
import UpdateBook from "../components/books/edit";
import CreateUser from "../components/users/create";
import Login from "../components/sessions/create";
import PrivateRoute from "../middleware/privateRoute";

export default (
  <div>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/Login" exact component={Login} />
        <PrivateRoute path="/books/new" exact component={CreateBook} />
        <Route path="/books/:id/show" exact component={BookShow} />
        <Route
          path="/books/:id/edit"
          exact
          render={({ match, history }) => (
            <UpdateBook match={match} history={history} />
          )}
        ></Route>
        <Route path="/users/new" exact component={CreateUser} />
        <Route path="/" component={Book} />
      </Switch>
    </Router>
  </div>
);

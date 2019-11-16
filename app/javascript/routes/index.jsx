import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Book from "../components/books";

export default (
  <div>
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          BookSTORE
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                My books
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  All my Books
                </a>
                <a className="dropdown-item" href="#">
                  Add a new book
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Profile
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Login
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Sign Up
                </a>
                <a className="dropdown-item" href="#">
                  Login
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Logout
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0 ml-auto">
            <input
              className="form-control h-50 mr-sm-2 text-center"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn-sm btn-primary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
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

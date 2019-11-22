import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogged: false, gotUnswerFromServer: false };
  }

  componentDidMount() {
    fetch("/api/logged_in")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok!");
      })
      .then(response => {
        console.log(response);
        this.setState({
          gotUnswerFromServer: true,
          isLogged: response.logged_in
        });
      })
      .catch(e => this.props.history.push("/"));
  }

  render() {
    if (this.state.gotUnswerFromServer) {
      if (this.state.isLogged)
        return (
          <Route path={this.props.path} component={this.props.component} />
        );
      else return <Redirect to="/login" />;
    } else return null;
  }
}

export default PrivateRoute;

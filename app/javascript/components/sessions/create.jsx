import React, { Component } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Select,
  MenuItem,
  Button
} from "@material-ui/core";
import { CHECK_LOGIN } from "../../actions"
import { connect } from "react-redux"

class createSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSumbit(e) {
    e.preventDefault();
    const url = "/api/login";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
        user:this.state
      })
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok!");
      })
      .then(response =>{
        this.props.checkLogin() 
        console.log(response)
        })
      .catch((e) =>this.props.history.push("/"));
      // .catch((e) =>this.props.history.push("/"));
  }
  render() {
    return (
      <div>
        <form>
          <FormControl>
            <InputLabel htmlFor="email">Email address</InputLabel>
            <Input
              id="email"
              aria-describedby="my-helper-text"
              onChange={e => this.handleChange(e)}
            />
            <FormHelperText id="my-helper-text">
              Please enter valid Email address.
            </FormHelperText>
          </FormControl>
      
          <FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              aria-describedby="my-helper-text"
              onChange={e => this.handleChange(e)}
              type="password"
            />
            <FormHelperText id="my-helper-text">
              Please enter your password.
            </FormHelperText>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            className="mt-3"
            onClick={e => this.handleSumbit(e)}
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const checkLogin = () => dispatch(CHECK_LOGIN)
  return { checkLogin }
}

export default connect(null, mapDispatchToProps)(createSession);

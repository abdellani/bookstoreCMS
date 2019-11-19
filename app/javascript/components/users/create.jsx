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

class createUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      role: "user"
    };
  }

  handleChangeSelect(event) {
    this.setState({
      role: event.target.value
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSumbit(e) {
    console.log(this.state);
    e.preventDefault();
    const url = "/api/users";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok!");
      })
      .then(response => console.log(response))
      .catch(() => this.props.history.push("/"));
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
            <InputLabel htmlFor="name">Full Name</InputLabel>
            <Input
              id="name"
              aria-describedby="my-helper-text"
              onChange={e => this.handleChange(e)}
            />
            <FormHelperText id="my-helper-text">
              Please enter your full name.
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
          <FormControl>
            <InputLabel htmlFor="password_confirmation">
              Confirm Password
            </InputLabel>
            <Input
              id="password_confirmation"
              aria-describedby="my-helper-text"
              onChange={e => this.handleChange(e)}
              type="password"
            />
            <FormHelperText id="my-helper-text">
              Please re-enter your password.
            </FormHelperText>
          </FormControl>
          <FormControl>
            <Select
              id="role"
              value={this.state.role}
              onChange={e => this.handleChangeSelect(e)}
            >
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="author">Author</MenuItem>
            </Select>
            <FormHelperText id="my-helper-text">Select Role</FormHelperText>
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

export default createUser;

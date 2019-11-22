import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Select,
  Button,
  MenuItem
} from "@material-ui/core";
import { connect } from "react-redux";
import { CHECK_LOGIN } from "../../actions";

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      ISBN: "",
      description: "",
      author: "",
      genere: "test",
      generes: ["test"]
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  componentDidMount() {
    fetch("/api/generes")
      .then(response => response.json())
      .then(response => this.setState({ generes: response }));
  }

  handleChangeSelect(event) {
    this.setState({
      genere: event.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const url = "/api/books";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ book: this.state })
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok!");
      })
      .then(response => this.props.history.push("/books"))
      .catch(() => this.props.history.push("/"));
  }

  render() {
    let { title, description, author, ISBN } = this.state;
    return (
      <div>
        <form>
          <FormControl>
            <InputLabel htmlFor="title">Book Title</InputLabel>
            <Input
              id="title"
              value={title}
              onChange={e => this.handleChange(e)}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="description">
              Please write a short description
            </InputLabel>
            <Input
              id="description"
              value={description}
              onChange={e => this.handleChange(e)}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="author">Author Name</InputLabel>
            <Input
              id="author"
              value={author}
              onChange={e => this.handleChange(e)}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="ISBN">Enter ISBN</InputLabel>
            <Input
              id="ISBN"
              value={ISBN}
              type="number"
              onChange={e => this.handleChange(e)}
            />
          </FormControl>
          <FormControl>
            <Select
              id="genere"
              value={this.state.genere}
              onChange={e => this.handleChangeSelect(e)}
            >
              {this.state.generes.map(genere => (
                <MenuItem value={genere} key={genere}>
                  {genere}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText id="my-helper-text">Select Genere</FormHelperText>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            className="mt-3"
            onClick={e => {
              this.handleSubmit(e);
            }}
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

const mapStoreToProps = state => {
  let { loggedIn } = this.state;
  return { loggedIn };
};
const mapDispatchToProps = dispatch => {
  const checkLogin = () => dispatch(CHECK_LOGIN);
  return { checkLogin };
};

export default connect(null, mapDispatchToProps)(Books);

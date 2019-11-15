import React from "react";
import { Link } from "react-router-dom";

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    const url = "/api/books";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ books: response }))
      .catch(() => this.props.history.push("/"));
  }

  render() {
    const { books } = this.state;
    const bookTitles = books.map(book => <li key={book.id}>{book.title}</li>);
    return <div>{bookTitles}</div>;
  }
}
export default Books;

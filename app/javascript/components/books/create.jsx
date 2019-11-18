import React from "react";

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      ISBN: "",
      description: "",
      author: ""
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    const url = "/api/books";
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
    let { title, description, author, ISBN } = this.state;
    return <div>
      <form>
        <input id="title" value={title} onChange={(e) => this.handleChange(e)} />
        <input id="description" value={description} onChange={(e) => this.handleChange(e)} />
        <input id="author" value={author} onChange={(e) => this.handleChange(e)} />
        <input id="ISBN" value={ISBN} onChange={(e) => this.handleChange(e)} />
        <input type="submit" onClick={(e) => this.handleSubmit(e)} />
      </form>
    </div>;
    }
  }
  export default Books;

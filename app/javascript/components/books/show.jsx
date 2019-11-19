import React, { useState } from "react";
import { useRouteMatch, Redirect } from "react-router-dom";

const Book = props => {
  const [title, setTitle] = useState("title");
  const [description, setDescription] = useState("description");
  const [ISBN, setISBN] = useState("ISBN");
  const [redirect, setRedirect] = useState(false);
  let match = useRouteMatch("/books/:id/show");
  let url = `/api/books/${match.params.id}`;

  if (!redirect) {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok!");
      })
      .then(response => {
        setTitle(response.book.title);
        setDescription(response.book.description);
        setISBN(response.book.ISBN);
      })
      .catch(e => console.log(e));
  }
  const onDelete = () => {
    fetch(url, {
      method: "DELETE"
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok!");
      })
      .then(response => {
        setRedirect(true);
      });
  };
  return (
    <div>
      {redirect && <Redirect to="/books" />}
      {title}
      {description}
      {ISBN}
      <button onClick={() => onDelete()}> Delete this Book</button>
    </div>
  );
};

export default Book;

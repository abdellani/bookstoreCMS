export const CHECK_LOGIN = (dispatch) => {
  const url = "/api/logged_in";
  fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Network response was not ok!");
  }).then(
    response => {
      let { logged_in } = response
      dispatch({ type: "CHECK_LOGIN", logged_in })
    }
  ).catch((e) => console.log(e));


}
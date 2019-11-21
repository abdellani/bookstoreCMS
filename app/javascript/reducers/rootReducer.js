const initState = {
  loggedIn: false
}

const rootReducer = (state = initState, action) => {
  switch(action.type){
    case "CHECK_LOGIN":
      return {loggedIn:action.loggedIn}
    default:
        return state
  }
}

export default rootReducer
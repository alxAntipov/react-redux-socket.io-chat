import { combineReducers } from "redux"

const messages = (state = [], action) => {
  return []
}
const user = (state = "", action) => {
  switch (action.type) {
    case "SET_USER":
      return action.username
    default:
      return state
  }
}

const reducers = combineReducers({
  user
})

export default reducers

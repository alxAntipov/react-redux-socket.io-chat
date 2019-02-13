import { combineReducers } from "redux"
import user from "./user"
import { NEW_MESSAGE } from "../constants"

const messages = (state = [], action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      return [...state, action.message]
    default:
      return state
  }
}

const reducers = combineReducers({
  messages,
  user
})

export default reducers

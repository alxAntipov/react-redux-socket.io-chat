import { combineReducers } from "redux"
import user from "./user"
import contactList from "./contactList"
import activeChannel from "./activeChannel"
import socket from "./socket"
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
  user,
  contactList,
  activeChannel,
  socket
})

export default reducers

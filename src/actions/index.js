import { RECEIVE_MESSAGE, SEND_MESSAGE } from "../constants"

export function setUser(username) {
  return {
    type: "SET_USER",
    username
  }
}

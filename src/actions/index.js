import { NEW_MESSAGE } from "../constants"

export function newMessage(message) {
  return {
    type: NEW_MESSAGE,
    message
  }
}

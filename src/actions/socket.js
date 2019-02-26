import { SET_SOCKET, CLEAR_SOCKET } from "../constants"

export function setSocket(socket) {
  return {
    type: SET_SOCKET,
    payload: socket
  }
}

export function clearSocket() {
  return {
    type: CLEAR_SOCKET
  }
}

import { SET_SOCKET, CLEAR_SOCKET } from "../constants"

export default (state = null, { type, payload }) => {
  switch (type) {
    case SET_SOCKET:
      return payload
    case CLEAR_SOCKET:
      return null
    default:
      return state
  }
}

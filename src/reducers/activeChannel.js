import { SET_ACTIVE_CHANNEL, CLEAR_ACTIVE_CHANNEL } from "../constants"

export default (state = null, { type, payload }) => {
  switch (type) {
    case SET_ACTIVE_CHANNEL:
      return payload
    case CLEAR_ACTIVE_CHANNEL:
      return null
    default:
      return state
  }
}

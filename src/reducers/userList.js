import { USERS_FAILURE, USERS_SUCCESS } from "../constants"

export default (state = [], action) => {
  switch (action.type) {
    case USERS_SUCCESS:
      return action.userList
    case USERS_FAILURE:
      return []
    default:
      return state
  }
}

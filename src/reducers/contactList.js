import { CONTACTS_FAILURE, CONTACTS_SUCCESS } from "../constants"

export default (state = [], action) => {
  switch (action.type) {
    case CONTACTS_SUCCESS:
      return action.userList
    case CONTACTS_FAILURE:
      return []
    default:
      return state
  }
}

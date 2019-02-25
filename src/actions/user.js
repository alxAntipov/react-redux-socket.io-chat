import { USERS_FAILURE, USERS_REQUEST, USERS_SUCCESS } from "../constants"

// get userList action
function requestUserList() {
  return {
    type: USERS_REQUEST
  }
}

function receiveUserList(userList) {
  return {
    type: USERS_SUCCESS,
    userList
  }
}

function UserListError(message) {
  return {
    type: USERS_FAILURE,
    message
  }
}

export function getUserList() {
  return dispatch => {
    dispatch(requestUserList())
    return fetch(`http://localhost/userList`, {
      method: "get"
    })
      .then(response => {
        console.log(response)

        return response.json()
      })
      .then(response => {
        if (!response.error) {
          dispatch(receiveUserList(response))
        } else {
          dispatch(UserListError(response.error))
        }
      })
  }
}

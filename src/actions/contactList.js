import {
  CONTACTS_FAILURE,
  CONTACTS_REQUEST,
  CONTACTS_SUCCESS
} from "../constants"

// get userList action
function requestUserList() {
  return {
    type: CONTACTS_REQUEST
  }
}

function receiveUserList(userList) {
  return {
    type: CONTACTS_SUCCESS,
    userList
  }
}

function UserListError(message) {
  return {
    type: CONTACTS_FAILURE,
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
          return dispatch(receiveUserList(response))
        } else {
          return dispatch(UserListError(response.error))
        }
      })
  }
}

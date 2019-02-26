import {
  SET_ACTIVE_CHANNEL,
  CLEAR_ACTIVE_CHANNEL,
  USER_FAILURE,
  USER_REQUEST,
  USER_SUCCESS
} from "../constants"

export function setActiveChannel(channel) {
  return {
    type: SET_ACTIVE_CHANNEL,
    payload: channel
  }
}

export function clearActiveChannel() {
  return {
    type: CLEAR_ACTIVE_CHANNEL
  }
}

// get user
function requestUser() {
  return {
    type: USER_REQUEST
  }
}

function UserRequestError() {
  return {
    type: USER_FAILURE
  }
}

export function getUser(id) {
  return dispatch => {
    dispatch(requestUser())
    return fetch(`http://localhost/getUser`, {
      method: "post",
      body: JSON.stringify(id),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        if (!response.error) {
          return dispatch(setActiveChannel(response[0]))
        } else {
          return dispatch(UserRequestError())
        }
      })
  }
}

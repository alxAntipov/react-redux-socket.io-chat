import jwtDecode from "jwt-decode"
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGOUT_SUCCESS,
  REGISTER_REQUEST
} from "../constants"

// Login action
function requestLogin() {
  return {
    type: LOGIN_REQUEST
  }
}

function receiveLogin(token) {
  return {
    type: LOGIN_SUCCESS,
    token
  }
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    message
  }
}

export function postLogin(credentials) {
  return dispatch => {
    dispatch(requestLogin())
    return fetch(`http://localhost/login`, {
      method: "post",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        if (!response.error) {
          const token = response.user.token
          localStorage.setItem("token", token)
          dispatch(receiveLogin(jwtDecode(token)))
        } else {
          dispatch(loginError(response.error))
        }
      })
  }
}

// Registration action
function requestRegister() {
  return {
    type: REGISTER_REQUEST
  }
}

export function postRegister(credentials) {
  return dispatch => {
    dispatch(requestRegister())
    return fetch(`http://localhost/register`, {
      method: "post",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        if (!res.error) {
          const token = res.user.token
          localStorage.setItem("token", token)
          dispatch(receiveLogin(jwtDecode(token)))
        } else {
          dispatch(loginError(res.error))
        }
      })
  }
}

export function userLogout() {
  localStorage.removeItem("token")
  return { type: LOGOUT_SUCCESS }
}

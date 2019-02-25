import jwtDecode from "jwt-decode"
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGOUT_SUCCESS,
  LOGIN_SUCCESS,
  REGISTER_REQUEST
} from "../constants"

const initialState = {
  isAuthenticated: localStorage.getItem("token") ? true : false,
  errorMessage: "",
  token: localStorage.getItem("token")
    ? jwtDecode(localStorage.getItem("token"))
    : {}
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isAuthenticated: false
      })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: true,
        errorMessage: "",
        token: action.token
      })
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isAuthenticated: false,
        errorMessage: action.message
      })
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: false,
        token: []
      })
    case REGISTER_REQUEST:
      return Object.assign({}, state, {
        isAuthenticated: false
      })
    default:
      return state
  }
}

export default user

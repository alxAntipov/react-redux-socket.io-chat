import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { postLogin } from "../actions/user"

class SignIn extends Component {
  loggeedIn = e => {
    e.preventDefault()
    const { dispatch } = this.props
    const credentials = {
      user: {
        login: this.login.value,
        password: this.password.value
      }
    }
    dispatch(postLogin(credentials))
  }

  render() {
    const { errorMessage, isAuthenticated } = this.props

    if (isAuthenticated) {
      return <Redirect to={{ pathname: "/" }} />
    }

    return (
      <div className="App">
        <div className="authWrapper">
          <nav className="authNav">
            <Link className="authNav__link authNav__link--active" to="/login">
              Sign in
            </Link>
            <Link className="authNav__link" to="/register">
              Join us
            </Link>
          </nav>
          <form action="" className="authForm">
            <p className="authForm__label">Username</p>
            <input
              ref={el => (this.login = el)}
              type="text"
              className="authForm__field"
            />
            <p className="authForm__label">Password</p>
            <input
              ref={el => (this.password = el)}
              type="password"
              className="authForm__field"
            />
            <br />
            <input id="check" type="checkbox" className="authForm__check" />
            <label htmlFor="check" className="authForm__text">
              Keep me signed in
            </label>
            <p>{errorMessage || null}</p>
            <button onClick={this.loggeedIn} className="authForm__btn">
              Sign In
            </button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  errorMessage: state.user.errorMessage,
  isAuthenticated: state.user.isAuthenticated
})

export default connect(mapStateToProps)(SignIn)

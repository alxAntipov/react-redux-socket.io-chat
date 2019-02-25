import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { postRegister } from "../actions/auth"

class SignUp extends Component {
  state = {
    message: ""
  }
  registered = event => {
    event.preventDefault()

    if (
      this.login.value.length < 5 ||
      this.password.value < 6 ||
      this.password.value !== this.rePassword.value
    ) {
      this.setState({ message: "incorrect data" })
    } else {
      const { dispatch } = this.props
      const credentials = {
        user: {
          login: this.login.value,
          password: this.password.value
        }
      }
      dispatch(postRegister(credentials))
    }
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
            <Link className="authNav__link" to="/login">
              Sign in
            </Link>
            <Link
              className="authNav__link authNav__link--active"
              to="/register"
            >
              Join us
            </Link>
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
              <p className="authForm__label">Password cofirm</p>
              <input
                ref={el => (this.rePassword = el)}
                type="password"
                className="authForm__field"
              />
              <p>{errorMessage || this.state.message}</p>
              <button onClick={this.registered} className="authForm__btn">
                Join us
              </button>
            </form>
          </nav>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  errorMessage: state.user.errorMessage,
  isAuthenticated: state.user.isAuthenticated
})

export default connect(mapStateToProps)(SignUp)

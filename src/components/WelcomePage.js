import React, { Component } from "react"
import { connect } from "react-redux"

class WelcomePage extends Component {
  render() {
    const { user } = this.props
    return (
      <div className="welcomePage">
        <img
          className="welcomePage__img"
          src="https://uinames.com/api/photos/male/9.jpg"
          alt=""
        />
        <p className="welcomePage__title">
          Hello <span className="welcomePage__login">{user.login}</span>
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.token
})

export default connect(mapStateToProps)(WelcomePage)

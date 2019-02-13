import React, { Component } from "react"
import { connect } from "react-redux"
import { userLogout } from "../actions/user"

class SideBar extends Component {
  render() {
    const { login, dispatch } = this.props

    return (
      <div className="sideBar">
        <p>{login}</p>
        <button onClick={e => dispatch(userLogout())}>Выйти</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  login: state.user.token.login
})

export default connect(mapStateToProps)(SideBar)

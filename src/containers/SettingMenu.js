import React, { Component } from "react"
import { connect } from "react-redux"

import { userLogout } from "../actions/auth"

class SettingMenu extends Component {
  render() {
    const { dispatch } = this.props
    return (
      <div>
        <button onClick={e => dispatch(userLogout())}>Выйти</button>
      </div>
    )
  }
}

export default connect()(SettingMenu)

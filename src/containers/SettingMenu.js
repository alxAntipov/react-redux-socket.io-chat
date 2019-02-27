import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import { userLogout } from "../actions/auth"

class SettingMenu extends Component {
  render() {
    const { dispatch } = this.props
    return (
      <div className="settings">
        <Link to="/settings/change" className="settings__item">
          Change profile
        </Link>
        <button
          className="settings__item"
          onClick={e => dispatch(userLogout())}
        >
          Exit
        </button>
      </div>
    )
  }
}

export default connect()(SettingMenu)

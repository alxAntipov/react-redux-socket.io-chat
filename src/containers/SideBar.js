import React, { Component } from "react"
import { connect } from "react-redux"
import { Link, Route, Switch, withRouter } from "react-router-dom"

import SettingMenu from "./SettingMenu"
import ContactList from "./ContactList"
import Profile from "../components/Profile"

class SideBar extends Component {
  render() {
    const { login } = this.props

    return (
      <div className="sideBar">
        <div className="sideBar__header">
          <div className="sideBar__content">
            <Profile login={login} />
          </div>
          <nav className="menu">
            <Link className="menu__icon menu__icon--contacts" to="/chat" />
            <Link className="menu__icon menu__icon--users" to="/users" />
            <Link className="menu__icon menu__icon--settings" to="/settings" />
          </nav>
        </div>
        <div className="sideBar__main">
          <Switch>
            <Route path="/chat" component={ContactList} />
            <Route path="/settings" component={SettingMenu} />
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  login: state.user.token.login
})

export default withRouter(connect(mapStateToProps)(SideBar))

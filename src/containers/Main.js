import React, { Component } from "react"
import { connect } from "react-redux"
import { Route, Switch, withRouter } from "react-router-dom"
import WelcomePage from "../components/WelcomePage"
import ChangeProfile from "./ChangeProfile"
import Chat from "./Chat"

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Switch>
          <Route path="/chat/:id" component={Chat} />
          <Route path="/settings/change" component={ChangeProfile} />
          <Route component={WelcomePage} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

export default withRouter(connect(mapStateToProps)(Main))

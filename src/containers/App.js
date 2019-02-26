import React, { Component } from "react"
import io from "socket.io-client"
import { connect } from "react-redux"

import { XOR } from "../utils"
import SideBar from "./SideBar"
import Main from "./Main"
import { getUserList } from "../actions/contactList"
import { setSocket } from "../actions/socket"
import { newMessage } from "../actions"

class App extends Component {
  componentDidMount() {
    const { dispatch, user } = this.props
    const socket = io.connect("http://localhost")
    socket.on("message", msg => {
      dispatch(newMessage(msg))
    })
    dispatch(setSocket(socket))
    dispatch(getUserList()).then(contacts => {
      contacts.userList.map(contact => {
        const channel = XOR(user.id, contact._id)
        socket.emit("join channel", channel)
      })
    })
  }

  render() {
    return (
      <div className="App">
        <SideBar />
        <Main />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  user: state.user.token,
  contacts: state.contactList
})

export default connect(mapStateToProps)(App)

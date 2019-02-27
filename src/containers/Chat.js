import React, { Component } from "react"
import { connect } from "react-redux"
import moment from "moment"

import Profile from "../components/Profile"
import Message from "../components/Message"
import { newMessage } from "../actions"
import { getUser } from "../actions/activeChannel"
import { XOR } from "../utils"

class Chat extends Component {
  componentDidMount() {
    const { dispatch, match, activeChannel } = this.props
    if (!activeChannel) {
      dispatch(getUser({ id: match.params.id }))
    }
    this.input.select()
    this.scrollToBottom()
  }

  componentDidUpdate() {
    this.input.select()
    this.scrollToBottom()
  }

  handleButton = e => {
    const { dispatch, user, activeChannel, socket } = this.props
    const channel = activeChannel ? XOR(user.id, activeChannel._id) : null
    let recieveData = {
      user_from: user.login,
      user_to: activeChannel.login,
      text: this.input.value,
      channel: channel,
      date: moment().format("MMMM Do YYYY, h:mm:ss a")
    }
    e.preventDefault()
    socket.emit("new message", recieveData, data => {
      dispatch(newMessage(data))
    })
    this.input.value = ""
    this.scrollToBottom()
  }

  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.messageList
    const maxScrollTop = scrollHeight - clientHeight
    this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0
  }

  render() {
    const { activeChannel } = this.props
    return (
      <div className="chat">
        <div className="chat__header">
          <Profile
            modify={true}
            login={activeChannel ? activeChannel.login : null}
          />
        </div>
        <div
          className="chat__main"
          ref={el => {
            this.messageList = el
          }}
        >
          <Message messages={this.props.messages} />
        </div>
        <div className="chat__footer">
          <form className="messageForm">
            <textarea
              className="messageForm__textArea"
              placeholder="Write a message"
              ref={node => (this.input = node)}
              onKeyDown={e => {
                if (e.keyCode === 13) this.handleButton(e)
              }}
            />
            <button className="messageForm__btn" onClick={this.handleButton} />
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.token,
    activeChannel: state.activeChannel,
    socket: state.socket
  }
}

export default connect(mapStateToProps)(Chat)

import React, { Component } from "react"
import io from "socket.io-client"
import { connect } from "react-redux"
import moment from "moment"
import Message from "../components/Message"
import { newMessage } from "../actions"

class Chat extends Component {
  socket = io.connect("http://localhost")

  componentDidMount() {
    const { dispatch } = this.props
    this.scrollToBottom()

    this.socket.on("message", data => {
      dispatch(newMessage(data))
    })
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  handleButton = e => {
    console.log("hi")

    const { dispatch } = this.props
    let recieveData = {
      user: this.props.login,
      text: this.input.value,
      date: moment().format("MMMM Do YYYY, h:mm:ss a")
    }
    e.preventDefault()
    this.socket.emit("message", recieveData, data => dispatch(newMessage(data)))
    this.input.value = ""
    this.scrollToBottom()
  }

  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.messageList
    const maxScrollTop = scrollHeight - clientHeight
    this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0
  }

  render() {
    return (
      <div className="chatWrapper">
        <div
          className="messages"
          ref={el => {
            this.messageList = el
          }}
        >
          <Message messages={this.props.messages} />
        </div>
        <div className="wrapperForm">
          <form className="messageForm">
            <textarea
              className="messageForm--textArea"
              placeholder="Write a message"
              ref={node => (this.input = node)}
              onKeyDown={e => {
                if (e.keyCode === 13) this.handleButton(e)
              }}
            />
            <button className="messageForm--send" onClick={this.handleButton} />
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    login: state.user.token.login,
    messages: state.messages
  }
}

export default connect(mapStateToProps)(Chat)

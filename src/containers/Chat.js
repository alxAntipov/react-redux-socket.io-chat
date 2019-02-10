import React, { Component } from "react"
import io from "socket.io-client"
import { connect } from "react-redux"
import Message from "../components/Message"
import moment from "moment"

class Chat extends Component {
  state = {
    messages: []
  }

  socket = io.connect("http://localhost").on("message", data => {
    this.changeState(data)
  })

  handleButton = e => {
    let recieveData = {
      user: this.props.user,
      text: this.input.value,
      date: moment().format("MMMM Do YYYY, h:mm:ss a")
    }
    e.preventDefault()
    this.socket.emit("message", recieveData, data => this.changeState(data))
    this.input.value = ""
    this.scrollToBottom()
  }
  changeState = data => {
    this.setState(state => {
      return { messages: [...state.messages, data] }
    })
  }

  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.messageList
    const maxScrollTop = scrollHeight - clientHeight
    this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0
  }

  componentDidMount() {
    this.scrollToBottom()
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }
  render() {
    return (
      <div className="content">
        <div
          className="messages"
          ref={el => {
            this.messageList = el
          }}
        >
          <Message messages={this.state.messages} />
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
    user: state.user
  }
}

export default connect(mapStateToProps)(Chat)

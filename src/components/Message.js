import React, { Component } from "react"
import { connect } from "react-redux"

class Message extends Component {
  render() {
    const { messages, user } = this.props
    return (
      <ul className="messageList">
        {messages.map((msg, key) => {
          const isMyMessage = user.login === msg.user ? true : false
          console.log(isMyMessage)

          return (
            <li className={isMyMessage ? "message--my" : "message"} key={key}>
              <img
                className="message__avatar"
                src="https://uinames.com/api/photos/male/9.jpg"
                alt=""
              />
              <div className="message__container">
                <div
                  className={
                    isMyMessage ? "message__header--my" : "message__header"
                  }
                >
                  <p className="message__username">{msg.user}</p>
                  <p className="message__date">{msg.date}</p>
                </div>
                <p
                  className={
                    isMyMessage ? "message__text--my" : "message__text"
                  }
                >
                  {msg.text}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}
const mapStateToProps = state => ({
  user: state.user.token
})

export default connect(mapStateToProps)(Message)

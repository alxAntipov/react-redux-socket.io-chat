import React, { Component } from "react"

class Message extends Component {
  render() {
    const { messages } = this.props
    return (
      <ul className="messageList">
        {messages.map((msg, key) => (
          <li className="message" key={key}>
            <img
              className="message__avatar"
              src="https://img.icons8.com/material-rounded/24/000000/user.png"
              alt=""
            />
            <div className="message__container">
              <div className="message__header">
                <p className="message__username">{msg.user}</p>
                <p className="message__date">{msg.date}</p>
              </div>
              <p className="message__text">{msg.text}</p>
            </div>
          </li>
        ))}
      </ul>
    )
  }
}

export default Message

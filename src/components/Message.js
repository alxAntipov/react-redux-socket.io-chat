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
              src="https://uinames.com/api/photos/male/9.jpg"
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

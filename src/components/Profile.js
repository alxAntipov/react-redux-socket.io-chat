import React, { Component } from "react"

export class Profile extends Component {
  render() {
    const { login } = this.props
    return (
      <div className="profile">
        <img
          className="message__avatar"
          src="https://uinames.com/api/photos/male/9.jpg"
          alt=""
        />
        <p className="profile__login">{login}</p>
      </div>
    )
  }
}

export default Profile

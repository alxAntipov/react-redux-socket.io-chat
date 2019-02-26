import React, { Component } from "react"

export class Profile extends Component {
  render() {
    const { login, modify } = this.props
    return (
      <div className="profile">
        <img
          className="profile__avatar"
          src="https://uinames.com/api/photos/male/9.jpg"
          alt=""
        />
        <p className={`profile__login${modify ? "--chat" : ""}`}>{login}</p>
      </div>
    )
  }
}

export default Profile

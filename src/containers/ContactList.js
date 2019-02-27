import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import { setActiveChannel } from "../actions/activeChannel"
import Profile from "../components/Profile"

class ContactList extends Component {
  setChannel = user => {
    const { dispatch } = this.props
    dispatch(setActiveChannel(user))
  }
  render() {
    const { contacts, activeChannel } = this.props
    return (
      <ul className="contactList">
        {contacts
          ? contacts.map(contact => (
              <li
                className={
                  contact._id === activeChannel._id
                    ? "contactList__item contactList__item--active"
                    : "contactList__item"
                }
                key={contact._id}
                onClick={() => this.setChannel(contact)}
              >
                <Link to={`/chat/${contact._id}`}>
                  <div className="sideBar__content">
                    <Profile login={contact.login} />
                  </div>
                </Link>
              </li>
            ))
          : null}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  contacts: state.contactList,
  activeChannel: state.activeChannel
})

export default connect(mapStateToProps)(ContactList)

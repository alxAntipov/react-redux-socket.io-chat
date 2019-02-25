import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import { getUserList } from "../actions/user"
import Profile from "../components/Profile"

class ContactList extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getUserList())
  }

  render() {
    const { contacts } = this.props
    return (
      <ul className="sideBar_main">
        {contacts
          ? contacts.map(contact => (
              <li className="contactList__item" key={contact._id}>
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
  contacts: state.userList
})

export default connect(mapStateToProps)(ContactList)

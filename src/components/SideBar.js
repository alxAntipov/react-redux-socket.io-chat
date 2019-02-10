import React, { Component } from "react"
import { connect } from "react-redux"
import { setUser } from "../actions"

class SideBar extends Component {
  saveUser = e => {
    const { dispatch } = this.props
    e.preventDefault()
    dispatch(setUser(this.input.value))
  }
  render() {
    return (
      <form className="sideBar">
        <input type="text" ref={node => (this.input = node)} />
        <button onClick={this.saveUser}>Save</button>
      </form>
    )
  }
}

export default connect()(SideBar)

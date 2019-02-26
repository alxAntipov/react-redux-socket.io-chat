import React, { Component } from "react"
import { connect } from "react-redux"

class ChangeProfile extends Component {
  render() {
    return <div>Change profile</div>
  }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(ChangeProfile)

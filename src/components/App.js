import React, { Component } from "react"
import SideBar from "../containers/SideBar"
import Chat from "../containers/Chat"

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <Chat />
      </div>
    )
  }
}

export default App

import React, { Component } from "react"
import SideBar from "../components/SideBar"
import Chat from "./Chat"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="chatWrapper">
          <SideBar />
          <Chat />
        </div>
      </div>
    )
  }
}

export default App

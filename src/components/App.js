import React, { Component } from "react"
import SideBar from "./SideBar"
import Chat from "../containers/Chat"
import "../styles/index.scss"
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

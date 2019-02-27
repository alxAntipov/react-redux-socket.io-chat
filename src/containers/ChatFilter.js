import { connect } from "react-redux"
import Chat from "./Chat"

const getCurrentMessage = (messages, currentUser, activeChannel) => {
  return messages.filter(
    message =>
      (message.user_from === currentUser.login &&
        message.user_to === activeChannel.login) ||
      (message.user_from === activeChannel.login &&
        message.user_to === currentUser.login)
  )
}

const mapStateToProps = state => ({
  messages: getCurrentMessage(
    state.messages,
    state.user.token,
    state.activeChannel
  )
})

export default connect(mapStateToProps)(Chat)

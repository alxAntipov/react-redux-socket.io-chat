import mongoose from "mongoose"
const { Schema } = mongoose

const MessageSchema = new Schema({
  user_from: String,
  user_to: String,
  text: String,
  create_at: Date
})
mongoose.model("User", MessageSchema)

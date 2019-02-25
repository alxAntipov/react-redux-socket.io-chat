import mongoose from "mongoose"
const { Schema } = mongoose

const MessageSchema = new Schema({
  userId_from: String,
  userId_to: String,
  text: String,
  create_at: Date
})
mongoose.model("User", MessageSchema)

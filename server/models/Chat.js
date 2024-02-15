const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema(
  {
    members: Array
  },
  //like createdAt
  { timestamps: true }
)

const Chat = mongoose.model('Chat', chatSchema)

module.exports = Chat

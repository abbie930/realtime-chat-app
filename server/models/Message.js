const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema(
  {
   chatId: String,
   senderId: String,
   text: String
  },
  //like createdAt
  { timestamps: true }
)

const Message = mongoose.model('Message', messageSchema)

module.exports = Message

const Chat = require('../models/Chat')

const chatController = {
  createChat: async (req, res) => {
    const { firstId, secondId } = req.body

    try {
      const chat = await Chat.findOne({
        members: { $all: [firstId, secondId] }
      })

      // 如果聊天已經存在的話，就不用再新增一個
      if (chat) {
        return res.status(200).json(chat)
      }

      const newChat = new Chat({
        members: [firstId, secondId]
      })

      const response = await newChat.save()
      res.status(200).json(response)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },
  findUserChats: async (req, res) => {
    const userId = req.params.userId

    try {
      const chats = await Chat.find({
        members: { $in: [userId] }
      })

      res.status(200).json(chats)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },
  findChat: async (req, res) => {
    const { firstId, secondId } = req.params

    try {
      const chat = await Chat.findOne({
        members: { $all: [firstId, secondId] }
      })

      res.status(200).json(chat)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }
}

module.exports = chatController

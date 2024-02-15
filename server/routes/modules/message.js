const router = require('express').Router()
const messageController = require('../../controllers/message-controller')

router.get('/:chatId', messageController.getMessages)
router.post('/', messageController.createMessage)

module.exports = router

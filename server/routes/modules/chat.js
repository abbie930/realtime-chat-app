const router = require('express').Router()
const chatController = require('../../controllers/chat-controller')


router.get('/find/:firstId/:secondId', chatController.findChat)
router.get('/:userId', chatController.findUserChats)
router.post('/', chatController.createChat)


module.exports = router

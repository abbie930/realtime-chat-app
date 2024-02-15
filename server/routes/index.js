const router = require('express').Router()

const user = require('./modules/user')
const chat = require('./modules/chat')
const message = require('./modules/message')


router.use('/users', user)
router.use('/chats', chat)
router.use('/messages', message)


module.exports = router

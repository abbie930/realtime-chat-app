const router = require('express').Router()

const user = require('./modules/user')
const chat = require('./modules/chat')

router.use('/users', user)
router.use('/chats', chat)

module.exports = router

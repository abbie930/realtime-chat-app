const router = require('express').Router()

const user = require('./modules/user')

router.use('/users', user)

module.exports = router

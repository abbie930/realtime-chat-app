const router = require('express').Router()
const userController = require('../../controllers/user-controller')



router.get('/find/:userId', userController.findUser)
router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/', userController.getUsers)



module.exports = router
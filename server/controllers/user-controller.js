const User = require('../models/User')
const bcrypt = require('bcrypt')
const validator = require('validator')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  const jwtKey = process.env.JWT_SEC
  return jwt.sign({ _id }, jwtKey, { expiresIn: '3d' })
}

const userController = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body

      let user = await User.findOne({
        email
      })

      if (user) {
        return res.status(400).json('Email is already taken.')
      }

      if (!name || !email || !password) {
        return res.status(400).json('All fields are required.')
      }

      if (!validator.isEmail(email)) {
        return res.status(400).json('Email must be a valid email.')
      }

      // if (!validator.isStrongPassword(email)) {
      //   return res.status(400).json('Password must be a strong password.')
      // }

      user = new User({ name, email, password })

      const salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(user.password, salt)

      await user.save()

      const token = createToken(user._id)

      res.status(200).json({ _id: user.id, name, email, token })
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body
     
      const user = await User.findOne({ email })
      if (!user) return res.status(400).json("Invalid email or password")

      const isValidPassword = await bcrypt.compare(password, user.password)
      if (!isValidPassword) return res.status(400).json('Invalid email or password')

      const token = createToken(user._id)

      res.status(200).json({ _id: user._id, name: user.name, email, token })

    } catch (err) {
      next(err)
    }
  }
}

module.exports = userController

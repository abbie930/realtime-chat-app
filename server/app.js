const express = require('express')
const cors = require('cors')
const router = require('./routes')

// mongoose connect
require('./config/mongoose')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())
app.use('/api', router)


app.listen(PORT, () => { 
  console.log(`Server is running on http://localhost:${PORT}`)
})

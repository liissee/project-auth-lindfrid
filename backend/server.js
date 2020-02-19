import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import crypto from "crypto"
import bcrypt from 'bcrypt-nodejs'

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/authAPI"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

const User = mongoose.model('User', {
  name: {
    type: String,
    unique: true,
    required: true,
    minlength: 2,
    maxlength: 20
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex')
  }
})

// Defines the port the app will run on. Defaults to 8080, but can be 
// overridden when starting the server. For example:
//
//   PORT=9000 npm start
const port = process.env.PORT || 8080
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(bodyParser.json())

const authenticateUser = async (req, res, next) => {
  const user = await User.findOne({ accessToken: req.header('Authorization') })
  if (user) {
    req.user = user //what does this mean?
    next() //when to use next? (calling the next() function which allows the proteced endpoint to continue execution)
  } else {
    res.status(403).json({ message: "You need to login to access this page" })
  }
}

// Start defining your routes here
app.get('/', (req, res) => {
  res.send('Hello world!!!')
})

// Create user
// Database only saves correct users, but doesn't display error when incorrect users are posted
app.post('/users', async (req, res) => {
  try {
    const { name, email, password } = req.body
    // Why not await when endpoint is async?
    const user = new User({ name, email, password: bcrypt.hashSync(password) })
    const saved = await user.save()
    res.status(201).json(saved)
  } catch (err) {
    res.status(400).json({ message: 'Could not create user', errors: err.errors })
  }
})

app.post('/sessions', async (req, res) => {
  const user = await User.findOne({ email: req.body.email })
  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    res.json({ userId: user._id, accessToken: user.accessToken })
  } else {
    res.json({ notFound: true })
  }
})

app.get('/secrets', authenticateUser)
app.get('/secrets', (req, res) => {
  // res.json("Secreeeet")
  res.json({ secret: 'this is a super secret meessage' }) //what is the difference: res.json and res.send? 
})



// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})


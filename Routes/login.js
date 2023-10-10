const { signup, login } = require("../Backend/login.js")
const express = require("express")
const { generatetoken,generatetoken1 } = require("../middleware.js")

const route = express.Router()

route.post('/signup', generatetoken1, signup) //using middleware to generate token
route.get('/login', generatetoken, login)

module.exports = route
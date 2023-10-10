const { getproduct } = require("../Backend/product.js")
const express = require("express")
const { verifytoken } = require("../middleware.js")

const route = express.Router()

route.get('/getproduct', verifytoken, getproduct) //very token middleware

module.exports = route
const express = require("express")
const router_login = require("./Routes/login.js")
const router_product = require("./Routes/product.js")

module.exports = function app1(app) {
    app.use('/login', router_login)
    app.use('/product', router_product)
}
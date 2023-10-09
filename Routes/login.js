const {signup, login}= require("../Backend/login.js")
const express=require("express")

const route=express.Router()

route.post('/signup',signup)
route.get('/login',login)

module.exports=route
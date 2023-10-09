const {getproduct}= require("../Backend/product.js")
const express=require("express")

const route=express.Router()

route.get('/getproduct',getproduct)

module.exports=route
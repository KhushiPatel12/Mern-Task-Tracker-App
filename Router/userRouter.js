const express = require('express')
const Router = express.Router()
const userModel = require("../model/userModel")

Router.use(express.json())

Router.get("/",(req,res) => {
    res.json({data:"This is Registration page"})
})

Router.post('/register',(req,res)=> {
    const userdata = req.body    
    userModel.create(userdata)
    return res.json({data:"Insertion done successfully"})
})

Router.post('/login', async(req,res)=> {
    const userlogin = req.body
    console.log("user",userlogin)
    const loginuser = await userModel.find(userlogin)
    return res.json({data:loginuser})
})

module.exports = Router;
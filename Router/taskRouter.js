const express = require('express')
const Router = express.Router()
const taskModel = require("../model/taskModel")
Router.use(express.json())

Router.get("/",(req,res) => {
    res.json({data:"This is Login page"})
})

Router.post('/addTask',(req,res) => {
    const mytask = req.body
    const addtask = taskModel.create(mytask)
    return res.json({data:addtask})
})

Router.post('/getTask', async(req,res) => {
    const taskuser = req.body
    console.log("username",taskuser)
    const getdata = await taskModel.find(taskuser)
    return res.json({data:getdata})
})

Router.post('/deleteTask', async(req,res) => {
    const del = req.body
    const deltask = await taskModel.findOneAndDelete(del)
    return res.json({data:"deleted"})
})

Router.post('/update' , async(req,res)=> {
    const uid = req.body
    const updateuser = await taskModel.find(uid)
    return res.json({data:updateuser})
})

Router.put('/updat/:_id' , async(req,res) => {  
    const uid = req.params._id
    const updatuser = req.body
    const user_update = await taskModel.findOneAndUpdate({_id:uid},updatuser,{new:true})
    return res.json({data:updatuser})
})

module.exports = Router;
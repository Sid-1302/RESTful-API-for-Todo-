const todo=require('../controller/controller')
const express=require('express')
const route=express.Router()


route.get('/get',todo.showTasks)
route.post('/post',todo.createTask)
route.delete('/delete/:id',todo.deleteTask)
route.put('/update/:id',todo.updateTask)


module.exports=route;





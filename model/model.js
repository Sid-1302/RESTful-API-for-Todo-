const mongoose=require('mongoose')

const Schema=new mongoose.Schema({
    title:{type:String,required:true},
    desc:{type:String},
    status:{type:Boolean,required:true},
    duedate:{type:String}
})

module.exports=mongoose.model('Todo',Schema);
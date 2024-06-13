const mongoose=require('mongoose')
const dotenv=require('dotenv')
const express=require('express')
const routes=require('./routes/route')
const bodyparser=require('body-parser')


dotenv.config()

mongoose.connect(process.env.URI)
.then(()=>{
    console.log('DB connection established..')
})
.catch((err)=>{
    console.log('Error - ',err)
})

const app=express()
app.use(bodyparser.json())
app.use('/todo',routes)

app.listen(4000,()=>{
    console.log('Server started at Port 4000');
})
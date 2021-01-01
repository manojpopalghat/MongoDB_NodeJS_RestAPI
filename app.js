const express = require('express')
const mongoose = require('mongoose')

url = 'mongodb://localhost/StudentDB'
const app = express()
mongoose.connect(url,{useNewUrlParser:true})

const con = mongoose.connection
con.on('open',()=>{
    console.log('Connected...')
})

app.use(express.json())

const studentRouter = require('./routes/students')
app.use('/students',studentRouter)

app.listen(9000, ()=>{
    console.log('Server started on port=9000')
})
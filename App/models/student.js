const { Int32, Long } = require('mongodb')
const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    _id:{
        type:Number,
        required:true
    },
    rollNo:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    department:{
        type:String
    },
    subject:{
        type:String
    },
    teacher:{
        type:String
    }
})

module.exports = mongoose.model('Student',studentSchema)
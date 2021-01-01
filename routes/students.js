const express = require('express')
const router = express.Router()
const Student = require('../models/student')

router.get('/',async(req,res)=>{
    try{
        const students = await Student.find()
        res.json(students)
    }
    catch(err){
        res.send('Error : '+err)
    }
})
router.get('/:id',async(req,res)=>{
    try{
        const student = await Student.findById(req.params.id)
        res.json(student)
    }
    catch(err){
        res.send('Error : '+err)
    }
})
router.post('/',async(req,res)=>{
    try{
        const student = new Student({
            _id:req.body._id,
            rollNo:req.body.rollNo,
            name:req.body.name,
            department:req.body.department,
            subject:req.body.subject,
            teacher:req.body.teacher
        })
        const resStudent =await student.save()
        res.json(resStudent)
    }
    catch(err){
        res.send('Error : '+err)
    }
})

router.put('/:id',async(req,res)=>{
    try{
        const student = await Student.findById(req.params.id)
        student.rollNo=req.body.rollNo
        student.name=req.body.name
        student.department=req.body.department
        student.subject=req.body.subject
        student.teacher=req.body.teacher

        const resStudent =await student.save()
        res.json(resStudent)
    }
    catch(err){
        res.send('Error : '+err)
    }
})
router.patch('/:id',async(req,res)=>{
    try{
        const student = await Student.findById(req.params.id)
        student.rollNo=req.body.rollNo
        student.name=req.body.name
        student.department=req.body.department
        student.subject=req.body.subject
        student.teacher=req.body.teacher

        const resStudent =await student.save()
        res.json(resStudent)
    }
    catch(err){
        res.send('Error : '+err)
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const student = await Student.findById(req.params.id)
        const resStudent =await student.delete()
        res.json(resStudent)
    }
    catch(err){
        res.send('Error : '+err)
    }
})
module.exports = router
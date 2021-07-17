const express = require('express')
const student = require('../models/student')
const router = express.Router()
const Student = require('../models/student')

/*router.get('/', async(request, response) => {
    try{
            const students = await Student.find()
            response.json(students)
    }catch(err){
        response.send('Error' + err)
    }
})*/

router.get('/', async( request, response) => { 
    //try{
            const students = await Student.find()
            response.json(students)
    //}//catch(err){
        //response.send('Error' + err)
    //}
})

router.get('/:id', async(request, response) => { 
    try{
            const students = await Student.findById(request.params.id)
            response.json(students)
    }catch(err){
            response.send('Error' + err)
    }
})

router.post('/', async(request, response) => { 
    const student = new Student({
        //id: request.body.id,
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        phone_number: request.body.phone_number
    })

    try{
        const a1 = await student.save()
        response.json(a1)
    }catch(err){
        response.send('Error')
    }
})

router.patch('/:id', async(request, response) => { 
    try{
        const student = await Student.findById(request.params.id)
        student.phone_number = request.body.phone_number
        const a1 = await student.save()
        response.json(a1)
    }catch(err){
        response.send('Error')
    }
})

router.delete('/:id', async(request, response) => { 
    try{
        const student = await Student.findById(request.params.id)
        student.phone_number = request.body.phone_number
        student.first_name = request.body.first_name
        student.last_name = request.body.last_name
        const a1 = await student.remove()
        response.json(a1)
    }catch(err){
        response.send('Error')
    }
})

module.exports = router
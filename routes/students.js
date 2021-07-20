const { response } = require('express')
const express = require('express')
const jwt = require ('jsonwebtoken')
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
    try{
            const students = await Student.find()
            response.json(students)
    }catch(err){
        response.send('Error' + err)
    }
})

router.get('/:id', async(request, response) => { 
    try{
            const students = await Student.findById(request.params.id)
            response.json(students)
    }catch(err){
            response.send('Error' + err)
    }
})

router.post('/kwakobitoken', (request, response) => {
    // Mock user
    const user = {
        id: 1,
        username: 'raymund',
        email: 'raymunddlv@gmail.com'
    }
    jwt.sign({user}, 'secretkey', (err, token) => {
        response.json({
            token
        })
    });
})

router.post('/', verifyToken, async(request, response) => { 
    const student = new Student({
        //id: request.body.id,
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        phone_number: request.body.phone_number
    })
    jwt.verify(request.token, 'secretkey', async (err, authData) => {
        if (err) {
            response.sendStatus(403)
        } else {
            try{
                const a1 = await student.save()
                response.json(a1)
            }catch(err){
                response.send('Error' + err)
            }
        }
    })
})

router.patch('/:id', verifyToken, async(request, response) => { 
    jwt.verify(request.token, 'secretkey', async (err, authData) => {
        if (err) {
            response.sendStatus(403)
        } else {    
            try{
            const student = await Student.findById(request.params.id)
            student.phone_number = request.body.phone_number
            student.first_name = request.body.first_name
            student.last_name = request.body.last_name
            const a1 = await student.save()
            response.json(a1)
            }catch(err){
                response.send('Error')
            }
        }
    })
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

// Format of Token
// Authorization: Bearer <access_token>

//Verify Token
function verifyToken (request, response, next) {
    //Get auth header value
    const bearerHeader = request.headers['authorization']
    //Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
        //Split at the space
        const bearer = bearerHeader.split(' ');
        //Get token from array
        const bearerToken = bearer[1]
        //Set the token
        request.token = bearerToken;
        next()
    } else {
        //Forbidden
        response.sendStatus(403);
    }
}

module.exports = router
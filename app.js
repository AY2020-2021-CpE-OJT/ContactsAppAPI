const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/StudentDB'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', function(){
    console.log('Connected!')
})

app.use(express.json())

const studentRouter = require('./routes/students')
app.use('/contacts', studentRouter)

app.listen(9000, function(){
    console.log('Server started!')
})
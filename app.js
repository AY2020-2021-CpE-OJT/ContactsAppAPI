const express = require('express')
const mongoose = require('mongoose')
const db = require('./db')
//const url = process.env.URL || 'mongodb://localhost:27017/StudentDB'
let port = process.env.PORT || 3000;

const app = express()

//mongodb+srv://raymxndo:<password>@cluster0.th1ts.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//raymxndo
//myMongoDB*password2021

/*mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true})
const con = mongoose.connection

con.on('open', function(){
    console.log('Connected!')
})*/

app.use(express.json())

const studentRouter = require('./routes/students')
app.use('/contacts', studentRouter)

app.listen(port, function(){
    console.log('Server started!')
}) 
const express = require('express')
const mongoose = require('mongoose')
const db = require('./db')
//const url = process.env.URL || 'mongodb://localhost:27017/StudentDB'
let port = process.env.PORT || 3000;

const app = express()

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


//link to read
//https://wirescript.vercel.app/blog/how-to-setup-mongodb-with-node-js-and-express
//https://stackoverflow.com/questions/65680842/error-mongooseerror-operation-users-insertone-buffering-timed-out-after-1
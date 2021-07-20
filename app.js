require("dotenv").config();
const express = require('express')
const mongoose = require('mongoose')
const db = require('./db')
//const url = process.env.URL || 'mongodb+srv://raymxndo:myMongoDB*password2021@cluster0.th1ts.mongodb.net/ContactsDatabase?retryWrites=true&w=majority'
let port = process.env.PORT || 3000;
require("dotenv").config();

const app = express()

mongoose.connect(process.env.MONGO_PROD_URI, {useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex: true})
const con = mongoose.connection

con.on('open', function(){
    console.log('Connected!')
})

app.use(express.json())

const studentRouter = require('./routes/students')
app.use('/contacts', studentRouter)

app.listen(port, function(){
    console.log('Server started!')
}) 


//link to read
//https://wirescript.vercel.app/blog/how-to-setup-mongodb-with-node-js-and-express
//https://stackoverflow.com/questions/65680842/error-mongooseerror-operation-users-insertone-buffering-timed-out-after-1
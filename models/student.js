const { ObjectId } = require('mongodb');
const { ObjectID } = require('mongodb');
const mongoose = require('mongoose')
const uuid = require('uuid');


const studentSchema = new mongoose.Schema({

    /*id:{
        type: Number,
        //default: uuid.v4,
        required: true
    },*/
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    phone_number:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Student', studentSchema)
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

},{
    capped: { size: 1024 },
    bufferCommands: false,
    autoCreate: false // disable `autoCreate` since `bufferCommands` is false
  },);

    async function myfunction() {
    const Student = mongoose.model('Student', studentSchema);
    // Explicitly create the collection before using it
    // so the collection is capped.
    await Student.createCollection();
   }
   function start() {
    return myfunction();
  }

module.exports = mongoose.model('Student', studentSchema)
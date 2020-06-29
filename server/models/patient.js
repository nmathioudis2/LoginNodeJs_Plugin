const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const patientSchema = new Schema({
    Name: {
        type: String,
        required: true,
        unique: false,
    },
    Surname: {
        type: String,
        required: true,
        unique: false,
    }
    ,
    Age: {
        type: String,
        required: true
    },
    Registered: {
        type: Date,
        required: true
    },
    Image: {
        type: Buffer
    }

});


//create model
const Patient = mongoose.model('patient', patientSchema);

//export model
module.exports = Patient;
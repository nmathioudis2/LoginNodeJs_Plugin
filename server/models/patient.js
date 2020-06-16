const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const patientSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: false,
    },
    surname: {
        type: String,
        required: true,
        unique: false,
    }
    ,
    age: {
        type: String,
        required: true
    },
    firstEntryDate: {
        type: Date,
        required: true
    },
    events: {
        event: [{date:Date, description: String}]
    }

});


//create model
const Patient = mongoose.model('patient', patientSchema);

//export model
module.exports = Patient;
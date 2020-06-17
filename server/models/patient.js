const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const patientSchema = new Schema({
    patientName: {
        type: String,
        required: true,
        unique: false,
    },
    patientSurname: {
        type: String,
        required: true,
        unique: false,
    }
    ,
    patientAge: {
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
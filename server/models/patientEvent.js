const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const patientEventSchema = new Schema({
    Surname: {
        type: String,
        required: true
    },
    Event: {
        type: String,
        required: true,
        unique: false,
    },
    EventDate: {
        type: Date,
        required: true
    },
});


//create model
const patientEvent = mongoose.model('patientEvent', patientEventSchema);

//export model
module.exports = patientEvent;
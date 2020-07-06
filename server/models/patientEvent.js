const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const patientEventSchema = new Schema({
    surname: {
        type: String,
        required: true
    },
    event: {
        type: String,
        required: true,
        unique: false,
    },
    eventDate: {
        type: Date,
        required: true
    },
});


//create model
const patientEvent = mongoose.model('patientEvent', patientEventSchema);

//export model
module.exports = patientEvent;
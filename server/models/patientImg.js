const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const patientImgSchema = new Schema({
    surname: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true,
        unique: false,
    }
});


//create model
const patientImg = mongoose.model('patientImg', patientImgSchema);

//export model
module.exports = patientImg;
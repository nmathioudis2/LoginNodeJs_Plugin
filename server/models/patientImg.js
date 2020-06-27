const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const patientImgSchema = new Schema({
    image: { data: Buffer, contentType: String }
});


//create model
const patientImg = mongoose.model('patientImg', patientImgSchema);

//export model
module.exports = patientImg;
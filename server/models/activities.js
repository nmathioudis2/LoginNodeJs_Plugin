const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const activitiesSchema = new Schema({
    Activity: {
        type: String,
        required: true,
        unique: true
    },
    Coordinator: {
        type: String,
        required: true
    }
});


//create model
const activity = mongoose.model('activity', activitiesSchema);

//export model
module.exports = activity;
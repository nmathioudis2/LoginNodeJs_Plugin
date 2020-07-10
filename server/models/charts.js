const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pieChartsSchema = new Schema({
    Surname: {
        type: String,
        required: true
    },
    Camera0: {
        type: String,
        required: true
    },
    Camera1: {
        type: String,
        required: true
    }

});

const pieChart = mongoose.model('patientcamerapref', pieChartsSchema);

module.exports = pieChart;
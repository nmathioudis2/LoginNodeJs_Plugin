const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LineChartSchema = new Schema({
    Surname: {
        type: String,
        required: true
    }
});

const LineChart = mongoose.model('patientimediagrams', LineChartSchema);

module.exports = LineChart;
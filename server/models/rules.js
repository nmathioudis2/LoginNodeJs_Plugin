const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rulesSchema = new Schema({
    status: {
        type: Boolean,
        required: true
    },
    sTime: {
        type: String,
        required: true
    },
    eTime: {
        type: String,
        required: true
    }

});

const SecurityRule = mongoose.model('securityrules', rulesSchema);

module.exports = SecurityRule;
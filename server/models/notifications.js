const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
    Notification: {
        type: String,
        required: true
    }
});

const notification = mongoose.model('notificationscorrected', NotificationSchema);

module.exports = notification;
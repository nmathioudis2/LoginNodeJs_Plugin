const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

//create schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true,

    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    staff: {
      type: String,
      required: true
    }
});

userSchema.pre('save', async function (next) {
    try {
        //Capitalize letters
        this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1);
        this.surname = this.surname.charAt(0).toUpperCase() + this.surname.slice(1);
        //Generate a salt
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(this.password, salt);
        this.password = passwordHash;
        next();

    } catch (error) {
        next(error);
    }
});


userSchema.methods.isValidPassword = async function (newPassword) {
    try {
        return await bcrypt.compare(newPassword, this.password)
    } catch (error) {
        throw new Error(error);
    }
}

//create model
const User = mongoose.model('user', userSchema);

//export model
module.exports = User;
const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Enter Your Name.']
    },
    email: {
        type: String,
        required: [true, 'Please Enter Your Email.'],
        unique: true,
        validate: [validator.isEmail, 'Please Enter a Valid Email.']
    },
    userDirectory: {
        type: String
    },
    password: {
        type: String,
        required: [true, 'Please Enter Password.'],
        select: false
    }
});

userSchema.methods.matchPassword = function (candidatePassword, userInDBPassword) {
    if (candidatePassword === userInDBPassword) {
        return true;
    }
    return false;
}


const User = mongoose.model('User', userSchema);
module.exports = User;
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

exports.signUp = async (request, response) => {
    // console.log(request.body);

    try {
        const newUser = await User.create(request.body);
        const token = jwt.sign({id: newUser._id}, 'secret_key_123', {
            expiresIn: '90d'
        });

        response.status(201).json({
            status: 'success',
            token,
            data: {
                user: newUser
            }
        });
    } catch (error) {
        response.status(400).json({ error: error.message });
    }
}

exports.signIn = async (request, response) => {

    try {
        const newUser = await User.findOne({ email: request.body.email, password: request.body.password }).select('-password -__v');

        response.status(201).json({
            status: 'success',
            data: {
                user: newUser
            }
        });
    } catch (error) {
        response.status(400).json({ error: error.message });
    }
}
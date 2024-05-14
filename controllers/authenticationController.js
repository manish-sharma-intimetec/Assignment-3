const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

exports.signUp = async (request, response) => {
    // console.log(request.body);

    try {
        const newUser = await User.create(request.body);
        const authToken = jwt.sign({ id: newUser._id }, 'secret_key_123', {
            expiresIn: '90d'
        });

        response.status(201).json({
            status: 'success',
            authToken,
            data: {
                user: newUser
            }
        });
    } catch (error) {
        response.status(400).json({ error: error.message });
    }
}

exports.login = async (request, response) => {

    try {
        const email = request.body.email;
        const password = request.body.password;

        if (!email || !password) {
            // error throwing
        }

        const userInDB = await User.findOne({email: email}).select('+password');

        const isPasswordMatched = userInDB.matchPassword(password, userInDB.password);

        const authToken = '';
        response.status(200).json({
            status: 'success',
            authToken
        });
    } catch (error) {
        response.status(400).json({ error: error.message });
    }
}
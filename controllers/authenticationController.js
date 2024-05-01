const User = require('../models/userModel');

exports.signUp = async (request, response) => { 
    // console.log(request.body); 

    try {
        const newUser = await User.create(request.body);

    response.status(201).json({
        status: 'success',
        data: {
            user: newUser
        }
    });
    } catch (error) {
        response.status(400).json({error: error.message});
    }
}


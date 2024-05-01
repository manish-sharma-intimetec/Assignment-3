const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connection = await mongoose.connect('mongodb://localhost:27017/Assignment-3', {
            useNewUrlParser: true,
        });
        console.log(`MongoDB Connected: ${connection.connection.host}`);
    } catch (error) {
        throw new Error(`MongoDB Connection Error: ${error.message}`);
    }
};

module.exports = connectDB;
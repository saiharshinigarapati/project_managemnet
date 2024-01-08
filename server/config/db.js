const mongoose = require('mongoose');
require('colors'); // If you're using the 'colors' package for styling console output

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    } catch (err) {
        console.error(`Error: ${err.message}`.red.underline.bold);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;

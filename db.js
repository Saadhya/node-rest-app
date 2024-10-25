// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        if (process.env.ENV === 'test') {
            await mongoose.connect('mongodb://localhost:27017/books-test', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log('MongoDB connected for testing');
            return;
        // } else if (process.env.ENV === 'development') {
        } else {
            await mongoose.connect('mongodb://localhost:27017/books-dev', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log('MongoDB connected for development');
            return;
        }
        // await mongoose.connect('mongodb://localhost:27017/books', {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        // });
        // console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;

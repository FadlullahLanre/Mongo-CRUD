const mongoose = require('mongoose');
require('dotenv').config();
const { MONGO_URI } = process.env;

// Create the connection function
const connectDB = () => {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser : true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false

    })
    .then(() => {
        console.log('Mongodb connected...');
    })
    .catch((err) => {
        console.error(err.message);
    })
}
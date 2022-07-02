const express = require('express');
const connectDB = require('./db');
require('dotenv').config();
const { PORT } = process.env;

// Connect to db
connectDB();

//Initialise db

const app = express();

//Initialise express middleware
app.use(express.json({extended: false}));

// Express route
app.get('/', (req, res) => res.json({message : "Welcome to tutoring app. "}));

// PORT
const port = process.env.PORT || PORT;

// Listen to connection
app.listen(port, () => console.log(`app running on ${port}`));
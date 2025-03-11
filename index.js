const express = require('express');
const { PORT, DB_CONNECT } = require('./config/index.js');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();

// Connect to db
try {
    mongoose.connect(
        DB_CONNECT,
        console.log('Connected to the Database!')
    )
}
catch (error) {
    console.log(error)
    process.exit()
}

app.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`);
});
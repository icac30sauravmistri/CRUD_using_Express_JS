const express = require('express');
const { PORT, DB_CONNECT } = require('./config/index.js');
const mongoose = require('mongoose');
const productRoutes = require('./routes/product.js');

const app = express();

// Connect to db
try {
    mongoose.set('strictQuery', false);
    mongoose.connect(
        DB_CONNECT, console.log('Connected to the Database!'))
} catch (error) {
    console.log(error);
    process.exit();
};

// Middlewares
app.use(express.json());

// route middlewares
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`);
});
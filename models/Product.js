const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: String,
    price: Stirng,
    image: String,
    details: String
});

module.exports = mongoose.model("Product", productSchema);
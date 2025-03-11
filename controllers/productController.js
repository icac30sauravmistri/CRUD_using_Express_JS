const Product = require('../models/Product.js');

// Get All Products

const product_all = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    }
    catch (error) {
        res.json({ message: error });
    }
};

// Single Productf

const product_details = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        res.json(product);
    } catch (err) {
        res.json({ message: err });
    }
};

// Add New Product

const product_create = async (req, res) => { };

// Update Product

const product_update = async (req, res) => { };

// Delete Product
const product_delete = async (req, res) => { };

module.exports = {
    product_all,
    product_details,
    product_create,
    product_update,
    product_delete
}
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

const product_create = async (req, res) => {
    const product = new Product({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
        details: req.body.details
    });

    try {
        const saveProduct = await product.save();
        res.send(saveProduct);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Update Product

const product_update = async (req, res) => {
    try {
        const product = {
            title: req.body.title,
            price: req.body.price,
            image: req.body.image,
            details: req.body.details
        };

        const updateProduct = await Product.findByIdAndUpdate(
            { _id: req.params.productId },
            product
        );
        res.send(updateProduct);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Delete Product
const product_delete = async (req, res) => {
    try {
        const removeProduct = await Product.findByIdAndDelete(req.params.productId);
        res.json(removeProduct);
    } catch (err) {
        res.json({ message: err });
    }
};

module.exports = {
    product_all,
    product_details,
    product_create,
    product_update,
    product_delete
}
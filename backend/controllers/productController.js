// controllers/productController.js
const Product = require('../models/Product');

const getFeaturedProducts = async (req, res) => {
    try {
        const products = await Product.find({ featured: true }).limit(10);
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching featured products' });
    }
};

module.exports = { getFeaturedProducts };

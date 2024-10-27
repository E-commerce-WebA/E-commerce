// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const { getFeaturedProducts } = require('../controllers/productController');

router.get('/', getFeaturedProducts);

module.exports = router;

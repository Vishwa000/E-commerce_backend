const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/products', productController.createProduct);
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById); // Get product by ID
router.patch('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/products/:id', productController.createProduct);
router.get('/products/', productController.getAllProducts);

router.patch('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;

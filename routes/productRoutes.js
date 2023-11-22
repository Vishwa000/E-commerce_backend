const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');
const productService = require('../services/productService');

// Create a new product
router.post('/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ status: true, message: 'Product created successfully' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ status: false, error: 'Failed to create product' });
  }
});

// Read all products
router.get('/products', async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json({ status: true, products: products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, error: 'Internal Server Error' });
  }
});

// Read a product by ID
router.get('/products/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const product = await productService.getProductById(id);
    if (!product) {
      return res.status(404).json({ status: false, error: 'Product not found' });
    }
    res.status(200).json({ status: true, product: product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, error: 'Internal Server Error' });
  }
});

// Update a product by ID
router.patch('/products/:id', async (req, res) => {
  const { id } = req.params;
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'price', 'quantityAvailable', 'category', 'currentPrice', 'sizes', 'colors', 'images', 'reviews'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).json({ status: false, error: 'Invalid updates!' });
  }

  try {
    const updatedProduct = await productService.updateProduct(id, req.body);
    if (!updatedProduct) {
      return res.status(404).json({ status: false, error: 'Product not found' });
    }
    res.status(200).json({ status: true, product: updatedProduct });
  } catch (error) {
    console.error(error);
    res.status(400).json({ status: false, error: error.message });
  }
});

// Delete a product by ID
router.delete('/products/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await productService.deleteProduct(id);
    if (!deletedProduct) {
      return res.status(404).json({ status: false, error: 'Product not found' });
    }
    res.status(200).json({ status: true, message: 'Product successfully deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, error: 'Internal Server Error' });
  }
});

module.exports = router;

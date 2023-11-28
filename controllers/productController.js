const Product = require('../models/productModel');
const { v4: uuidv4 } = require('uuid');

// Controller function for creating a new product
exports.createProduct = async (req, res) => {
  try {
    // Generate a new UUID for the 'id' field
    const id = uuidv4();

    // Create a new product with the generated UUID
    const product = await Product.create({ id, ...req.body });

    res.status(201).send({ status: true, message: 'Product created successfully', product });
  } catch (error) {
    console.error(error);
    res.status(400).send({ status: false, message: 'Failed to create product' });
  }
};

// Controller function for reading all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).send({ status: true, products });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, error: 'Internal Server Error' });
  }
};

// Controller function for updating a product by ID
exports.updateProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).send({ status: false, error: 'Product not found' });
    }

    await product.update(req.body);

    res.status(200).send({ status: true, message: 'Product updated successfully', product });
  } catch (error) {
    console.error(error);
    res.status(400).send({ status: false, error: 'Failed to update product' });
  }
};



// Controller function for updating a product by ID
exports.updateProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).send({ status: false, error: 'Product not found' });
    }

    await product.update(req.body);

    res.status(200).send({ status: true, message: 'Product updated successfully', product });
  } catch (error) {
    console.error(error);
    res.status(400).send({ status: false, error: 'Failed to update product' });
  }
};

// Controller function for deleting a product by ID
exports.deleteProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).send({ status: false, error: 'Product not found' });
    }

    await product.destroy();

    res.status(200).send({ status: true, message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, error: 'Internal Server Error' });
  }
};

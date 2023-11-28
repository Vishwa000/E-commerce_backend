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
    const data = await Product.findAll();
    res.status(200).send({ status: true, data });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, error: 'Internal Server Error' });
  }
};

// Controller function for reading a product by ID
exports.getProductById = async (req, res) => {
  const productId = req.params.id;

  try {
    const data = await Product.findByPk(productId);

    if (!data) {
      return res.status(404).send({ status: false, error: 'Product not found' });
    }

    res.status(200).send({ status: true, data });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, error: 'Internal Server Error' });
  }
};



// Controller function for updating a product by ID
exports.updateProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const data = await Product.findByPk(productId);

    if (!data) {
      return res.status(404).send({ status: false, error: 'Product not found' });
    }

    await data.update(req.body);

    res.status(200).send({ status: true, message: 'Product updated successfully', data });
  } catch (error) {
    console.error(error);
    res.status(400).send({ status: false, error: 'Failed to update product' });
  }
};

// Controller function for deleting a product by ID
exports.deleteProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const data = await Product.findByPk(productId);

    if (!data) {
      return res.status(404).send({ status: false, error: 'Product not found' });
    }

    await data.destroy();

    res.status(200).send({ status: true, message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, error: 'Internal Server Error' });
  }
};

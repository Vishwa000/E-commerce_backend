const Product = require('../models/productModel');

const getAllProducts = async () => {
  try {
    const products = await Product.findAll();
    return products;
  } catch (error) {
    console.error(error);
    throw new Error('Error getting products');
  }
};

const getProductById = async (id) => {
  try {
    const product = await Product.findByPk(id);
    return product;
  } catch (error) {
    console.error(error);
    throw new Error('Error getting product by ID');
  }
};

const createProduct = async (productData) => {
  try {
    const createdProduct = await Product.create(productData);
    return createdProduct;
  } catch (error) {
    console.error(error);
    throw new Error('Error creating product');
  }
};

const updateProduct = async (id, updatedProductData) => {
  try {
    const [rowsUpdated, [updatedProduct]] = await Product.update(updatedProductData, {
      where: { id },
      returning: true,
    });

    if (rowsUpdated === 0) {
      return null; // Product not found
    }

    return updatedProduct;
  } catch (error) {
    console.error(error);
    throw new Error('Error updating product');
  }
};

const deleteProduct = async (id) => {
  try {
    const deletedProduct = await Product.destroy({
      where: { id },
    });

    if (deletedProduct === 0) {
      return null; // Product not found
    }

    return { id };
  } catch (error) {
    console.error(error);
    throw new Error('Error deleting product');
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  discount: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  quantityAvailable: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  currentPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  sizes: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  colors: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  punctuation: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  reviews: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
});

module.exports = Product;


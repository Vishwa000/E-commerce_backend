'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      discount: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      quantityAvailable: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      currentPrice: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      sizes: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      colors: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      punctuation: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
      reviews: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  },
};

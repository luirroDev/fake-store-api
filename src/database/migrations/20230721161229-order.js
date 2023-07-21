'use strict';

const { OrdersSchema, ORDER_TABLE } = require('../models/order.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(ORDER_TABLE, OrdersSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(ORDER_TABLE);
  },
};

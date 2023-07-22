'use strict';

const { UserSchema, USERS_TABLE } = require('../models/user.model');
const { CustomerSchema, CUSTOMER_TABLE } = require('../models/customer.model');
const { ProductSchema, PRODUCT_TABLE } = require('../models/product.model');
const { CategoySchema, CATEGORY_TABLE } = require('../models/category.model');
const { OrdersSchema, ORDER_TABLE } = require('../models/order.model');
const {
  OrderProductSchema,
  ORDER_PRODUCT_TABLE,
} = require('../models/order-product.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(USERS_TABLE, UserSchema);
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
    await queryInterface.createTable(CATEGORY_TABLE, CategoySchema);
    await queryInterface.createTable(ORDER_TABLE, OrdersSchema);
    await queryInterface.createTable(ORDER_PRODUCT_TABLE, OrderProductSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(USERS_TABLE);
    await queryInterface.dropTable(CUSTOMER_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(ORDER_TABLE);
    await queryInterface.dropTable(ORDER_PRODUCT_TABLE);
  },
};

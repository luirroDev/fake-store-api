'use strict';

const { UserSchema, USERS_TABLE } = require('../models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(USERS_TABLE, UserSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(USERS_TABLE);
  },
};

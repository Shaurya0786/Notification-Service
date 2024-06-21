'use strict';
/** @type {import('sequelize-cli').Migration} */

const {enumstrings} = require('../utils/common/enum-string')
const {SUCCESS,FAILED,PENDING} = enumstrings
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subject: {
        type: Sequelize.STRING,
        allowNull:false
      },
      content: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      recieverEmail: {
        type: Sequelize.STRING,
        allowNull:false,
        validate:{
          isEmail:true
        }
      },
      status: {
        type: Sequelize.ENUM,
        values:[SUCCESS,FAILED,PENDING],
        defaultValue:PENDING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tickets');
  }
};
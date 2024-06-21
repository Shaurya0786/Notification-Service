'use strict';
const {
  Model
} = require('sequelize');

const {enumstrings} = require('../utils/common/enum-string')

const {SUCCESS,FAILED,PENDING} = enumstrings

module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ticket.init({
    subject: {
      type:DataTypes.STRING,
      allowNull:false
    },
    content: {
      type:DataTypes.STRING,
      allowNull:false
    },
    recieverEmail: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isEmail:true
      }
    },
    status: {
      type:DataTypes.ENUM,
      values:[SUCCESS,FAILED,PENDING],
      defaultValue:PENDING
    }
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};
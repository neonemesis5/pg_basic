const { Model, DataTypes } = require('sequelize');
const { sequelize } = require("../config/database");

class rolModel extends Model {}

rolModel.init({    
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    tableName: 'rol',
    modelName: 'rolModel',
    timestamps: false,
    underscored: true,
    sequelize,
  });
  
  module.exports = rolModel;
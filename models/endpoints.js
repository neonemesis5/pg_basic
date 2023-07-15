const { Model, DataTypes } = require('sequelize');
const { sequelize } = require("../config/database");

class endpointsModel extends Model {}

endpointsModel.init({    
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    tableName: 'endpoints',
    modelName: 'endpointsModel',
    timestamps: false,
    underscored:true,
    sequelize,
  });

  module.exports = endpointsModel;
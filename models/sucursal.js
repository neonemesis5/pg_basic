const { Model, DataTypes } = require('sequelize');
const { sequelize } = require("../config/database");

class Sucursal extends Model {}

Sucursal.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(30),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Sucursal',
  tableName: 'sucursal',
  timestamps: false
});

module.exports = Sucursal;
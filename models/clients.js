const { Model, DataTypes, literal } = require('sequelize');
const {sequelize} = require('../config/database');

class ClienteModel extends Model {}

ClienteModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    field: 'id',
    defaultValue: sequelize.literal('nextval(\'seq_cliente\')'),
  },
  nombre: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  cedula: {
    type: DataTypes.STRING(9),
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING(10),
    allowNull: false
  }
}, {
  modelName: 'ClienteModel',
  tableName: 'clientes',
  timestamps: false,
  underscored: true,
  sequelize
});

module.exports = ClienteModel;
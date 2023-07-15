const { Model, DataTypes } = require('sequelize');
const { sequelize } = require("../config/database");

class SucUsuario extends Model {}

SucUsuario.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  sucursal_id: {
    type: DataTypes.INTEGER,
    allowNull: false
    // references: {
    //   model: 'Sucursal',
    //   key: 'id'
    // }
  },
  usuarios_id: {
    type: DataTypes.INTEGER,
    allowNull: false
    // references: {
    //   model: 'Usuarios',
    //   key: 'id'
    // }
  },
  create_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  is_active: {
    type: DataTypes.STRING(1),
    allowNull: true
  },
  status: {
    type: DataTypes.STRING(1),
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'SucUsuario',
  tableName: 'sucursal_usuario',
  timestamps: false,
  underscored: true,
  // freezeTableName:true

});

module.exports = SucUsuario;
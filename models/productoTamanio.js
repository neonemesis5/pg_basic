const { Model, DataTypes } = require('sequelize');
const { sequelize } = require("../config/database");

class ProductoTamanios extends Model {}

ProductoTamanios.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  productos_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tamanios_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  presentacion_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sucursal_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precio_usd: {
    type: DataTypes.DECIMAL(5, 2),
  },
  precio_cop: {
    type: DataTypes.DECIMAL(12, 4),
  },
  precio_bss: {
    type: DataTypes.DECIMAL(12, 4),
  },
  cantidad: {
    type: DataTypes.DECIMAL(5, 2),
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(1),
  },
}, {
  sequelize,
  modelName: 'ProductoTamanios',
  tableName: 'producto_tamanios',
  timestamps: true,
  // createdAt: 'created_at',
  // updatedAt: 'updated_at',
  underscored: true,
});

// ProductoTamanios.belongsTo(Productos);
// ProductoTamanios.belongsTo(Tamanios);
// ProductoTamanios.belongsTo(Presentacion);
// ProductoTamanios.belongsTo(Sucursal);
module.exports = ProductoTamanios;
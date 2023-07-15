const { Model, DataTypes } = require('sequelize');
const { sequelize } = require("../config/database");


class DetallePedido  extends Model {}

DetallePedido.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    // autoIncrement: true,
    allowNull: false,
    field: 'id',
    defaultValue: sequelize.literal('nextval(\'seq_detpedido\')'),
  },
  facturas_id: {
    type: DataTypes.INTEGER,
    allowNull:true
    // references: {
    //   model: 'facturas',
    //   key: 'id'
    // },
    // onUpdate: 'NO ACTION',
    // onDelete: 'NO ACTION'
  },
  productos_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // references: {
    //   model: 'productos',
    //   key: 'id'
    // },
    // onUpdate: 'NO ACTION',
    // onDelete: 'NO ACTION'
  },
  sucursal_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  user_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW // Agrega esta línea para que se inserte la fecha actual
  },
  cantidad: {
    type: DataTypes.DECIMAL(4, 2),
    allowNull: true,
  },
  observacion: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  precio_usd: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: true
  },
  precio_cop: {
    type: DataTypes.DECIMAL(12, 4),
    allowNull: true
  },
  precio_bss: {
    type: DataTypes.DECIMAL(12, 4),
    allowNull: true
  },
  status: {
    type: DataTypes.STRING(1),
    allowNull: false
  }
}, {
  tableName: 'detalle_pedido',
  modelName:"DetallePedido",
  underscored: true,
  timestamps: false,
  sequelize,
});

// // Definir las relaciones con otras tablas
// DetallePedido.belongsTo(Facturas, { foreignKey: 'facturas_id' });
// DetallePedido.belongsTo(Productos, { foreignKey: 'productos_id' });

module.exports = DetallePedido;
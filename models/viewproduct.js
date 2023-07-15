// Database
const { Model, DataTypes, UUIDV4, literal } = require("sequelize");
const { sequelize } = require("../config/database");

class viewProductos extends Model {}

viewProductos.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  cod_barra: {
    type: DataTypes.STRING,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
  idproducto: {
    type: DataTypes.INTEGER,
  },
  idcategoria: {
    type: DataTypes.INTEGER,
  },
  nomcategoria: {
    type: DataTypes.STRING,
  },
  idtamanio: {
    type: DataTypes.INTEGER,
  },
  nomtamanio: {
    type: DataTypes.STRING,
  },
  idpresentacion: {
    type: DataTypes.INTEGER,
  },
  nompresentacion: {
    type: DataTypes.STRING,
  },
  idsucursal: {
    type: DataTypes.INTEGER,
  },
  nomsucursal: {
    type: DataTypes.STRING,
  },
  cantidad: {
    type: DataTypes.DECIMAL(5, 2),
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
}, {
  underscored: true,
  modelName: "viewProductos",
  tableName: 'view_productos',
  timestamps: false,
  sequelize,
});

module.exports = viewProductos;
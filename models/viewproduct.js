// Database
const { Model, DataTypes, UUIDV4, literal } = require("sequelize");
const { sequelize } = require("../config/database");

class viewProductos extends Model {}

viewProductos.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cod_barra: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idcategoria: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nomcategoria: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idtamanio: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nomtamanio: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idpresentacion: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nompresentacion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idsucursal: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nomsucursal: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  precio_usd: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  precio_cop: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  precio_bss: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  underscored: true,
  modelName: "viewProductos",
  tableName: 'view_productos',
  timestamps: false,
  sequelize,
});

module.exports = viewProductos;
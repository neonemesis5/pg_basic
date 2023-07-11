// Database
const { Model, DataTypes, UUIDV4, literal } = require("sequelize");
const { sequelize } = require("../config/database");
class CategoriaProducto  extends Model {}

CategoriaProducto.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(30),
    allowNull: false
  }
}, {
        modelName:"CategoriaProducto",
        tableName: "categoria_producto",
        underscored: true,
        timestamps: false,
        sequelize,
});

module.exports = CategoriaProducto;
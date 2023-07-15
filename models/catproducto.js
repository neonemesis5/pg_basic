// Database
const { Model, DataTypes, UUIDV4, literal } = require("sequelize");
const { sequelize } = require("../config/database");
class catProductoModel  extends Model {}

catProductoModel.init({
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
        modelName:"catProductoModel",
        tableName: "categoria_producto",
        underscored: true,
        timestamps: false,
        sequelize,
});

module.exports = catProductoModel;
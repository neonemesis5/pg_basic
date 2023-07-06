// Database
const { Model, DataTypes, UUIDV4, literal } = require("sequelize");
const { sequelize } = require("../config/database");

class UsuarioModel extends Model {}

UsuarioModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  rol_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  login: {
    type: DataTypes.STRING(10)
  },
  password: {
    type: DataTypes.STRING(250)
  },
  zona: {
    type: DataTypes.STRING(100)
  },
  status: {
    type: DataTypes.STRING(1)
  }
}, {
    underscored: true,
    modelName: "usuario",
  tableName: 'usuarios',
  timestamps: false,
  sequelize,
});
module.exports = UsuarioModel;
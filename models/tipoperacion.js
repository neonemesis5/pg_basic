// Database
const { Model, DataTypes, UUIDV4, literal } = require("sequelize");
const { sequelize } = require("../config/database");

class TipoOperacionMod  extends Model {}

TipoOperacionMod.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      nombre: {
        type: DataTypes.STRING(30),
        allowNull: false
      }
    },
    {
      tableName: "tipo_operacion",
      modelName:"TipoOperacion",
      underscored: true,
      timestamps: false,
      sequelize,
    }
  );
  module.exports = TipoOperacionMod;
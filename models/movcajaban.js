// Database
const { Model, DataTypes, UUIDV4, literal } = require("sequelize");
const { sequelize } = require("../config/database");
const UsuarioModel = require("../models/usuarios"); 
const TipoOperacionMod =require("../models/tipoperacion");
class MovimientosCajaban  extends Model {}

MovimientosCajaban.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: 'id',
        defaultValue: sequelize.literal('nextval(\'seq_movcb\')'),
      },
      usuarios_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      tipooperacion_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      sucursal_id:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: true
      },
      monto_usd: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: true
      },
      monto_cop: {
        type: DataTypes.DECIMAL(12, 4),
        allowNull: true
      },
      monto_bss: {
        type: DataTypes.DECIMAL(12, 4),
        allowNull: true
      },
      monto_bsd: {
        type: DataTypes.DECIMAL(14, 4),
        allowNull: true
      },
      observacion: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      status: {
        type: DataTypes.STRING(1),
        allowNull: true
      }
    },
    {
        modelName:"MovimientosCajaban",
        tableName: "movimientos_cajaban",
        underscored: true,
        timestamps: false,
        sequelize,
    }
  );
  
  MovimientosCajaban.belongsTo(UsuarioModel, {
    foreignKey: "usuarios_id",
    targetKey: "id"
  });
  
  MovimientosCajaban.belongsTo(TipoOperacionMod, {
    foreignKey: "tipooperacion_id",
    targetKey: "id"
  });

  module.exports = MovimientosCajaban;
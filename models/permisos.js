const { Model, DataTypes } = require('sequelize');
const { sequelize } = require("../config/database");

class permisosModel extends Model {}

permisosModel.init({    
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    rol_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    //   references: {
    //     model: 'rol',
    //     key: 'id'
    //   }
    },
    endpoints_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    //   references: {
    //     model: 'endpoints',
    //     key: 'id'
    //   }
    },
    create_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    tableName: 'permisos',
    modelName: 'permisosModel',
    timestamps: false,
    underscored:true,
    sequelize,
  });

  module.exports = permisosModel;
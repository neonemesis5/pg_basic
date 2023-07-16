const { Model, DataTypes } = require("sequelize");
const { sequelize } = require('../config/database');

class prodDetalleModelo extends Model {}

prodDetalleModelo.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		producto_id: {
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
		pcsto_usd: {
			type: DataTypes.DECIMAL(5, 2),
		},
		pcsto_cop: {
			type: DataTypes.DECIMAL(12, 4),
		},
		pcsto_bss: {
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
	},
	{
		sequelize,
		modelName: "prodDetalleModelo",
		tableName: "producto_detalle",
		timestamps: true,
		// createdAt: 'created_at',
		// updatedAt: 'updated_at',
		underscored: true,
	}
);

// ProductoTamanios.belongsTo(Productos);
// ProductoTamanios.belongsTo(Tamanios);
// ProductoTamanios.belongsTo(Presentacion);
// ProductoTamanios.belongsTo(Sucursal);
module.exports = prodDetalleModelo;

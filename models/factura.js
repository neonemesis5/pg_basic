const { Model, DataTypes } = require("sequelize");
const { sequelize } = require('../config/database');

class facturaModel extends Model {}

facturaModel.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			field: "id",
			defaultValue: sequelize.literal("nextval('seq_facturas')"),
		},
		clientes_id: DataTypes.INTEGER,
		user_id: DataTypes.INTEGER,
		sucursal_id: DataTypes.INTEGER,
		nro_factura: DataTypes.STRING(10),
		created_at: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW, // Agrega esta línea para que se inserte la fecha actual
		},
		total_usd: DataTypes.DECIMAL(8, 4),
		total_cop: DataTypes.DECIMAL(12, 4),
		total_bss: DataTypes.DECIMAL(12, 4),
		status: {
			type: DataTypes.STRING(1),
			defaultValue: 'A', // el otro estado es C de cerrado y el defatul es A de abierto
		},
	},
	{
		tableName: "facturas",
		modelName: "facturaModel",
		timestamps: false,
		underscored: true,
		sequelize,
	}
);
module.exports = facturaModel;

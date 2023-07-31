// Database
const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

class ViewCalcTotales extends Model {}

ViewCalcTotales.init(
	{
		user_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		sucursal_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		prodIds: {
			type: DataTypes.ARRAY(DataTypes.INTEGER),
			allowNull: false,
		},
		USD: {
			type: DataTypes.DECIMAL(10, 4),
		},
		COP: {
			type: DataTypes.DECIMAL(14, 4),
		},
		BSS: {
			type: DataTypes.DECIMAL(14, 4),
		},
	},
	{
		tableName: "view_calcTotales",
		timestamps: false,
		modelName: "ViewCalcTotales",
		underscored: true,
		sequelize,
	}
);
module.exports = ViewCalcTotales;

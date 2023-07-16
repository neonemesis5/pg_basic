const { Model, DataTypes } = require('sequelize');
const { sequelize } = require("../config/database");

class tpoUtilidadModel extends Model {}

tpoUtilidadModel.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		nombre: {
			type: DataTypes.INTEGER,
			allowNull: false,
			// references: {
			//   model: 'CategoriaProducto',
			//   key: 'id'
			// }
		},
		operador: {
			type: DataTypes.STRING(30),
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: 'tpoUtilidadModel',
		tableName: "tipo_utilidad",
		timestamps: false,
	}
);
module.exports = tpoUtilidadModel;

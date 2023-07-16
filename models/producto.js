const { Model, DataTypes } = require('sequelize');
const { sequelize } = require("../config/database");

class productoModel extends Model {}

productoModel.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		categoria_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			// references: {
			//   model: 'CategoriaProducto',
			//   key: 'id'
			// }
		},
		tipoutilidad_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		nombre: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		cod_barra: {
			type: DataTypes.STRING(13),
			allowNull: true,
		},
		descripcion: {
			type: DataTypes.STRING(50),
			allowNull: true,
		},
	},
	{
		sequelize,
		modelName: "productoModel",
		tableName: 'productos',
		timestamps: false,
	}
);

module.exports = productoModel;

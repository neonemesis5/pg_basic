const viewProductos = require('../models/viewproduct');

async function getAllProductView(params) {
	const response = {
		message: 'not data found',
		status: 400,
		data: null,
	};
	try {
		// console.log("llllllego",params);
		const { sucursalId } = params;
		const res = await viewProductos.findAll({
			where: { idsucursal: sucursalId },
		});
		if (res) {
			response.data = res;
			response.message = 'products found by this sucursal';
			response.status = 200;
		}
	} catch (error) {
		// console.log("//------->",error);
		response.message = error.details[0].message;
	}
	return response;
}
async function getAllProductViewResume(params) {
	const response = {
		message: 'not data found',
		status: 400,
		data: null,
	};
	try {
		// console.log("llllllego",params);
		const { sucursalId } = params;
		const res = await viewProductos.findAll({
			where: { idsucursal: sucursalId },
			attributes: ['id', 'nombre', 'nomtamanio', 'nompresentacion'],
		});
		if (res) {
			response.data = res;
			response.message = 'products found by this sucursal';
			response.status = 200;
		}
	} catch (error) {
		// console.log("//------->",error);
		response.message = error.details[0].message;
	}
	return response;
}

async function updateQTYProducto(params) {
	/**
	 * aqui buscar  el usuario en la tabla PARA LA SUCURSAL
	 */
}
module.exports = {
	updateQTYProducto,
	getAllProductView,
	getAllProductViewResume,
};

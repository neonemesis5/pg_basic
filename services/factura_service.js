const { Sequelize } = require('sequelize');
const { crearFactura } = require('../middlewares/validations/factValidation');
const facturaModel = require('../models/factura');
const DetallePedido = require('../models/pedido');
const ViewCalcTotales = require('../models/viewTotales');

// DEBE RECIBIR EL CLIENTEID Y DEBE LLAMAR LA TABLA DETALLE PEDIDO QUE LE PERMITA ALCULAR EL TOTAL
async function regFactura(params) {
	const response = {
		message: "has ocurred an error in creation factura",
		status: 400,
		data: null,
	};
	try {
		const { clientId, sucursalId, userId } = await crearFactura.validateAsync(
			params
		);

		const res = await ViewCalcTotales.findAll({
			where: { user_id: userId, sucursal_id: sucursalId },
		});
		if (res) {
			const arrayProd = res[0].prodIds;
			const newFac = await facturaModel.create({
				clientes_id: clientId,
				user_id: userId,
				sucursal_id: sucursalId,
				// nro_factura: "F00001",
				total_usd: 100.5,
				total_cop: 250000,
				total_bss: 1000,
			});
			if (newFac) {
				await DetallePedido.update(
					{ facturas_id: newFac.id },
					{ where: { id: { [Sequelize.Op.in]: arrayProd } } }
				);
				response.message = 'was create factura';
				response.status = 201;
				response.data = newFac;
			}
		} else {
			response.message =
				"no existen productos pedidos para este cliente o el usuario  actual no esta autorizado";
			response.status = 404;
		}
		// se debe verificar el clientid, la sucursalid y el user id

		// el numro de fctura por ahora ira null
	} catch (error) {
		response.message = "has ocurred an error in function regfactura";
	}
	return response;
}
module.exports = {
	regFactura,
};

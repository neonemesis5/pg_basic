/* eslint no-param-reassign: ["warn", { "props": true }] */
const DetallePedido = require("../models/pedido");
const productoModel = require("../models/producto");
const prodDetalleModelo = require("../models/productoDetalle");

async function createItemPedido(params) {
	const response = {
		message: "item registration error for this pedido",
		status: 400,
		data: null,
	};
	try {
		const { productId, qty, usuarioId, sucursalId } = params;
		// console.log('param->', params);
		//  const {qty,productId} = await productoSchema.validateAsync( params);
		const prod = await prodDetalleModelo.findOne({
			where: { producto_id: productId },
		});
		if (prod) {
			// console.log('===>', prod);
			const res = await DetallePedido.create({
				cantidad: qty,
				prodetalle_id: prod.id,
				user_id: usuarioId,
				sucursal_id: sucursalId,
				status: "P",
			});
			if (res) {
				// console.log("res-> ",res);
				// const res2= await ProductoTamanios
				response.message = "the produt has been add to new Pedido";
				response.status = 200;
				response.data = res;
			}
		} else {
			response.message = "error in item product isn't exists";
		}
	} catch (error) {
		console.log('error --->', error);
		response.message = `error in regItemPedido : ${error.details[0].message}`;
	}
	return response;
}
async function createItemsPedido(params) {
	const response = {
		message: "the array is not in the correct format",
		status: 400,
		data: null,
	};
	try {
		// console.log("params-->",params);
		const { pedidos, usuarioId, sucursalId } = params;
		const promises = pedidos.map(async (pedido) => {
			pedido.usuarioId = usuarioId;
			pedido.sucursalId = sucursalId;
			const res = await createItemPedido(pedido);
			// console.log("res ->", res);
			return res;
		});
		const results = await Promise.all(promises);
		if (results.some((res) => res.data === null)) {
			response.message = "some products could not be created";
		} else {
			response.message = "the products have been created";
			response.status = 200;
		}
		response.data = results;
	} catch (error) {
		// console.log("error ->",error);
		response.message = `Error in function createItemsPedido${error.details[0].message}`;
	}
	return response;
}

async function getTotalPrecios(params) {
	const response = {
		message: "error in calculate prices",
		status: 400,
		data: null,
	};
	try {
		const { sucursalId } = params;
		const sequelize = require("sequelize");

		const USD = sequelize.literal("SUM(det.precio_usd*(x.cant))");
		const COP = sequelize.literal("SUM(det.precio_cop*(x.cant))");
		const BSS = sequelize.literal("SUM(det.precio_bss*(x.cant))");

		const result = await DetallePedido.findAll({
			attributes: [
				[USD, "USD"],
				[COP, "COP"],
				[BSS, 'BSS'],
			],
			include: [
				{
					model: DetallePedido,
					as: "x",
					attributes: [
						"prodetalle_id",
						[sequelize.fn('sum', sequelize.col('cantidad')), 'cant'],
					],
					where: {
						status: "P",
						sucursal_id: sucursalId,
					},
					group: 'prodetalle_id',
				},
			],
			where: sequelize.literal("DetallePedido.prodetalle_id = x.prodetalle_id"),
		});
		if (result) {
			response.data = result;
			response.message = 'the calc was correctly done';
			response.status = 200;
		}
	} catch (error) {
		response.message = "error in function getTotalPrecios->" + error;
	}
	return response;
}

module.exports = {
	createItemPedido,
	createItemsPedido,
	getTotalPrecios,
};

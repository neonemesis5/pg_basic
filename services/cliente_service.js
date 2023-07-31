const { Op } = require('sequelize');
const ClienteModel = require('../models/clients');
const {
	newclienteSchema,
} = require('../middlewares/validations/clientValidation');

// eslint-disable-next-line no-unused-vars
async function getAllClientes(params) {
	const response = {
		message: 'no records yet',
		status: 400,
		data: null,
	};
	try {
		const resp = await ClienteModel.findAll();
		if (resp) {
			response.status = 200;
			response.data = resp;
			response.message = 'these are all the data found';
		}
	} catch (error) {
		// console.log("error --->",error);
		response.message = `error in getAllClientes : ${error.details[0].message}`;
	}
	return response;
}

async function createOneCLiente(params) {
	const response = {
		message: 'this client already exists',
		status: 400,
		data: null,
	};
	try {
		const { nombre, apellido, cedula, telefono } =
			await newclienteSchema.validateAsync(params.cliente);
		const findClient = await getClientesFilters({
			...params.cliente,
			restrict: false,
		});
		if (findClient) {
			if (findClient.status > 200) {
				const resp = await ClienteModel.create({
					nombre,
					apellido,
					cedula,
					telefono,
				});
				if (resp) {
					response.data = resp;
					response.status = 201;
					response.message = 'the new client has been created';
				}
			} else {
				// existen cliente  o clientes con los datos ingresados
				console.log('existe->', findClient);
				const arrayCli = findClient.data ? findClient.data[0] : null;
				response.data = arrayCli;
			}
		}
	} catch (error) {
		console.log('error --->', error);
		response.message = `error in createOneCLiente : ${error.message}`;
	}

	return response;
}

// eslint-disable-next-line no-unused-vars
async function createManyCLientes(params) {
	const response = {
		message: 'this client already exists',
		status: 400,
		data: null,
	};
	try {
		// console.log("==>", params);
	} catch (error) {
		// console.log("error --->",error);
		response.message = `error in createOneCLiente : ${error.message}`;
	}
}

async function getCLienteById(params) {
	const response = {
		message: 'Client not found',
		status: 404,
		data: null,
	};

	try {
		const { clientId } = params;
		const cliente = await ClienteModel.findById({ where: { id: clientId } });
		if (cliente) {
			response.message = 'Client found';
			response.status = 200;
			response.data = cliente;
		}
	} catch (error) {
		// Si ocurre un error, devuelve una respuesta con el mensaje de error
		response.message = `Error in getClienteById: ${error.message}`;
	}

	return response;
}

async function getClientesFilters(params) {
	const response = {
		message: 'There are no records with the entered values',
		status: 400,
		data: null,
	};

	try {
		// console.log("params-->>",params);
		const { nombre, apellido, cedula, telefono, restrict } = params;
		const whereClause = {};

		// Validar que los valores de entrada no sean nulos o indefinidos
		if (nombre) {
			whereClause.nombre = nombre;
		}
		if (apellido) {
			whereClause.apellido = apellido;
		}
		if (cedula) {
			whereClause.cedula = cedula;
		}
		if (telefono) {
			whereClause.telefono = telefono;
		}
		if (Object.keys(whereClause).length > 0) {
			const where = restrict
				? { [Op.and]: whereClause }
				: { [Op.or]: whereClause };
			const resp = await ClienteModel.findAll({ where });
			// console.log("--->>>", resp);
			if (resp.length > 0) {
				response.status = 200;
				response.message = 'Data found';
				response.data = resp;
			}
		}
	} catch (error) {
		// console.log("error--->>", error);
		response.message = `Error in getClientesFilters: ${error.message}`;
	}
	return response;
}

async function updateOneCliente(params) {
	const response = {
		message: 'Client not found',
		status: 404,
		data: null,
	};

	try {
		const { clientId, nombre, apellido, cedula, telefono } = params;
		const inputReceive = {};

		if (nombre) {
			inputReceive.nombre = nombre;
		}
		if (apellido) {
			inputReceive.apellido = apellido;
		}
		if (cedula) {
			inputReceive.cedula = cedula;
		}
		if (telefono) {
			inputReceive.telefono = telefono;
		}

		const [numRowsUpdated, [updatedClient]] = await ClienteModel.update(
			inputReceive,
			{
				returning: true,
				where: { id: clientId },
			}
		);

		// Si se actualizó el cliente, devuelve una respuesta exitosa con el cliente actualizado
		if (numRowsUpdated > 0 && updatedClient) {
			response.message = 'Client updated';
			response.status = 200;
			response.data = updatedClient;
		}
	} catch (error) {
		// Si ocurre un error, devuelve una respuesta con el mensaje de error
		response.message = `Error in updateOneCliente: ${error.message}`;
	}
	return response;
}

module.exports = {
	createOneCLiente,
	createManyCLientes,
	getCLienteById,
	getClientesFilters,
	updateOneCliente,
	getAllClientes,
};

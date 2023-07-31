const Joi = require("joi");

const crearFactura = Joi.object({
	sucursalId: Joi.number().integer().required(),
	clientId: Joi.number().integer().required(),
	userId: Joi.number().integer().required(),
});

module.exports = {
	crearFactura,
};

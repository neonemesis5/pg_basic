const Joi = require("joi");

const productoSchema = Joi.object({
	productId: Joi.number().integer().required(),
	qty: Joi.number().integer().required(),
});

// validacion de un array con 2 items internos
const productosSchema = Joi.object({
	productos: Joi.array()
		.items(
			Joi.object({
				productId: Joi.number().integer().required(),
				qty: Joi.number().integer().min(0).required(),
			})
		)
		.min(1)
		.required(),
});

module.exports = {
	productosSchema,
	productoSchema,
};

const Joi = require("joi");

const newclienteSchema = Joi.object({
  nombre: Joi.string()
    .pattern(/^[A-Za-z]+$/)
    .allow(null),
  apellido: Joi.string()
    .pattern(/^[A-Za-z]+$/)
    .allow(null),
  cedula: Joi.string().required().pattern(/^\d+$/),
  telefono: Joi.string().pattern(/^\d+$/).allow(null),
});
module.exports = {
  newclienteSchema,
};

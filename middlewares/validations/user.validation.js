const Joi = require("joi");

const loginSchema = Joi.object({
  login: Joi.string().required(),
  password: Joi.string().required(),
  sucursalId:Joi.number().required(),
});

module.exports = {
  loginSchema,
};

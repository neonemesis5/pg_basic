const Joi = requier("joi");

const loginschema = Joi.object({
    login: Joi.string().requiered(),
    password:Joi.string().required(),
});
module.exports = {
    loginschema,   
  };
  
const UsuarioModel = require("../models/usuarios");
const { loginSchema  } = require("../middlewares/validations/user.validation")

async function singIn(params) {
  const response = {
    message: "error",
    status: 400,
    data: null
  };

  try {
    // const { login, password } = await loginschema.validateAsync(params);
    // console.log("===> ", login, password);
  } catch (error) {
    response.message = "Error en acceso a la DB ";
    response.status = 500;
  }
  return response;
}
module.exports = {
  singIn,
};

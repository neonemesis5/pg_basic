const UsuarioModel = require("../models/usuarios");
const { loginSchema  } = require("../middlewares/validations/user.validation");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const moment = require("moment");
async function singIn(params) {
  const response = {
    message: "user not registered",
    status: 401,
    data: null
  };
  try {
    
    const { login, password } = await loginSchema.validateAsync(params);
    const oneClient=await  UsuarioModel.findOne({where: { login },});
  if (oneClient){
    const validatePass = await bcrypt.compare(password, oneClient.password);
    if (validatePass) {
  // Return client data successfully
      const token = jwt.sign(
        {
          id: oneClient.id,
          rol_id: oneClient.rol_id,
        },
        process.env.SECRET_KEY,
        {
          expiresIn: "1d",
        }
      );

      const last_logged = moment.utc().toISOString();
      oneClient.last_logged = last_logged;
// console.log("-- ",last_logged);
       await oneClient.save();
      response.data=token;
      response.status=200;
      response.message="the user is valid";
     
    }else{
      response.message="password incorrect";
      response.status=401;
    }
    }
  } catch (error) { //console.log("-->",error);
      response.message = error.details[0].message;
      response.status = 400;
  }
  return response;
}
module.exports = {
  singIn,
};

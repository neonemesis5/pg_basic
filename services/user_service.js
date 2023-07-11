const UsuarioModel = require("../models/usuarios");
const { loginSchema  } = require("../middlewares/validations/user.validation");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const moment = require("moment");
const SucursalUsuario = require("../models/user_sucursal");
const Sucursal = require("../models/sucursal"); 
async function singIn(params) {
  const response = {
    message: "user not registered",
    status: 401,
    data: null
  };
  try {
    
    const { login, password, sucursalId } = await loginSchema.validateAsync(params);
    const oneClient=await  UsuarioModel.findOne({where: { login },});
  if (oneClient){
    const validatePass = await bcrypt.compare(password, oneClient.password);
    if (validatePass) {
       const findUserSuc=await SucursalUsuario.findOne( { where: { sucursal_id: sucursalId } });
      //  console.log("===-->>>",findUserSuc);
      if(findUserSuc.is_active === 'T'){
        if(findUserSuc.usuarios_id === oneClient.id){
          response.message="Este usuario ya tiene una session Activa";
          response.status=200;
          const token = jwt.sign(
            {
              id: oneClient.id,
              rol_id: oneClient.rol_id,
              sucursal:sucursalId,
            },
            process.env.SECRET_KEY,
            {
              expiresIn: "1d",
            }
          );
          response.data=token;
        }else{
          const userActive=await UsuarioModel.findOne({where: { id:findUserSuc.usuarios_id },});
          response.message="Ya existe una session activa para esa sucursal, el usuario es: "+userActive.login;
          response.status=401;
        }
      }else{
        const regUserSuc = await SucursalUsuario.update(
            { is_active: 'T' },
            { where: { usuarios_id: oneClient.id, sucursal_id: sucursalId } }
          );

          const token = jwt.sign(
            {
              id: oneClient.id,
              rol_id: oneClient.rol_id,
              sucursal:sucursalId,
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
           const sucursal = await Sucursal.findOne({where:{id:sucursalId}});
          response.data=token;
          response.status=200;
          response.message="el Usuario: "+oneClient.login+", Ha sido autorizado para la sucursal: "+sucursal.nombre+"";
      }
     
     
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

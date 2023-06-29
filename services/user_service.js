const UsuarioModel= require('..models/UsuarioModel');
const { loginschema } = require('../middlewares/validations/user.validation');

async function singIn(params) {
    const response = {
        message:"error",
        status:400,
        data:null,
    };
    const { login, password }= await loginschema.validateAsync(params);
    console.log("===> ",login,password);
}
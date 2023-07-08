const { QueryTypes } = require("sequelize");
const jwt = require("jsonwebtoken");
const db = require("../config/database");
require("dotenv").config();


function autenticarJWT(req, res) {
  const response={
    message:"Token no proporcionado",
    status:401,
    data:null,
  }
  try {
     const token = req.header("token");
    if (token) {
      const verified = jwt.verify(token, process.env.SECRET_KEY);
      if(verified){
        // console.log("==>",verified);
        response.data=verified;
        response.status=200;
        response.message="user Valid"
      }else{
        response.message="token invalido";
      }
    }
  } catch (error) {
    response.message="error procesando token";
    response.status=500;
  }
  return  res.status(response.status).json(response);
}
module.exports ={
  autenticarJWT,
}
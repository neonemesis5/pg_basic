const { QueryTypes } = require("sequelize");
const jwt = require("jsonwebtoken");
const db = require("../config/database");
require("dotenv").config();


function autenticarJWT(req, res,next) {
  const response={
    message:"Token no proporcionado",
    status:401,
    data:null,
  }
  try {
    // console.log("=====>>>>",req.originalUrl);
    
    //  const token = req.header("token");
    const token = req.headers.authorization?.split(' ')[1];
    // console.log("-->",token);
    if (token) {
      const verified = jwt.verify(token, process.env.SECRET_KEY);
      if(verified){
        // console.log("==>",verified);
/***************aqui se debe validar el acceso al endpoint****************/
//se llama a servicio de validacion de endpoint         
        req.usuario = verified.id;
        next();
      }else{
        response.message="token invalido";
      }
    }
  } catch (error) {
    response.message="error procesando token";
    response.status=500;
    return  res.status(response.status).json(response);
  }
}
module.exports ={
  autenticarJWT,
}
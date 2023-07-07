const { QueryTypes } = require("sequelize");
const jwt = require("jsonwebtoken");
const db = require("../config/database");
require("dotenv").config();


function autenticarJWT(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (token) {
    jwt.verify(token, process.env.SECRETE_KEY, (error, decoded) => {
      if (error) {
        return res.status(401).json({ error: 'Token inválido' });
      } else {
        req.usuario = decoded;
        next();
      }
    });
  } else {
    res.status(401).json({ error: 'Token no proporcionado' });
  }
}
module.exports ={
  autenticarJWT,
}
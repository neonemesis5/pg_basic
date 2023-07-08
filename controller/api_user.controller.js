


const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");

// const UsuarioModel = require("../models/usuarios");
// Service
const  { singIn }= require("../services/user_service");


class User{
    static async login(req, res) {
        try {
          const response=await singIn(req.body);
          return res.status(200).send(response);
        } catch (error) {
          return res.status(500).send({message:"error -> ",error});
        }
    }

    static async getUser(req, res) {
        // Agrega la lógica para obtener un usuario con el ID proporcionado
        //console.log("llego getuser --->", req);
      }
    
      static async updateUser(req, res) {
        // Agrega la lógica para actualizar un usuario con el ID proporcionado
        console.log("llego update");
      }
    
      static async deleteUser(req, res) {
        // Agrega la lógica para eliminar un usuario con el ID proporcionado
      }
}


module.exports = User;
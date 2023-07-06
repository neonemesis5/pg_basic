


const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");

// const UsuarioModel = require("../models/usuarios");
// Service
// const  {singIn}= require("../services/user_service");


class User{
    static async login(req, res) {
        console.log("-->llego login");
        // const response=singIn(req);
        return res.status(200).send(null );
    }
    // static async create(req, res) {
    //     console.log("llego create")
    // }
    static async getUser(req, res) {
        // Agrega la lógica para obtener un usuario con el ID proporcionado
        console.log("llego getuser");
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
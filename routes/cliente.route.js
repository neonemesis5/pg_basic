const express = require("express");

const clientRoute = express.Router();
const clientController = require("../controller/api_clients.controller");
const { autenticarJWT } = require("../middlewares/JWT");

clientRoute.get("/", autenticarJWT, clientController.getallClientes);
clientRoute.post("/", autenticarJWT, clientController.createCliente);
// clientRoute.get('/:id',autenticarJWT, Productos.getProduct);
// clientRoute.put('/',autenticarJWT, Productos.updateQtyProduct);

module.exports = clientRoute;

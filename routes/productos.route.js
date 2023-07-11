const express = require('express');
const ProductsRoute = express.Router();
const Productos = require('../controller/productos.controller');
const { autenticarJWT } = require('../middlewares/JWT');

ProductsRoute.get('/',autenticarJWT, Productos.getAllProducts);
ProductsRoute.get('/id',autenticarJWT, Productos.getProduct);
ProductsRoute.post('/id',autenticarJWT, Productos.updateQtyProduct);

module.exports = ProductsRoute;

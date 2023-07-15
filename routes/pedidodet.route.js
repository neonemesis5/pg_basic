const express = require('express');
const PedidoRouter = express.Router();
const PedidoDetalle = require('../controller/api_pedido.controller');
const { autenticarJWT } = require('../middlewares/JWT');

PedidoRouter.post('/',autenticarJWT, PedidoDetalle.regPedido);


module.exports = PedidoRouter;

const express = require('express');
const opcabanRouter = express.Router();
const OpCajaBanco = require('../controller/opcaban.controller');
const { autenticarJWT } = require('../middlewares/JWT');

opcabanRouter.post('/',autenticarJWT, OpCajaBanco.aperturaCaja);


module.exports = opcabanRouter;

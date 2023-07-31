// eslint-disable-next-line import/newline-after-import
const express = require('express');
const facturaRouter = express.Router();
const facturaController = require('../controller/api_factura.controller');
const { autenticarJWT } = require('../middlewares/JWT');

facturaRouter.post('/',autenticarJWT, facturaController.newfactura);


module.exports = facturaRouter;

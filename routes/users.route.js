// routes/users.route.js

const express = require('express');
const router = express.Router();
const usersController = require('../controller/api_user.controller');
const { autenticarJWT } = require('../middlewares/JWT');


// Rutas protegidas con JWT
router.get('/:id', autenticarJWT, usersController.getUser);
router.put('/:id', autenticarJWT, usersController.updateUser);
router.delete('/:id', autenticarJWT, usersController.deleteUser);

// Rutas públicas
router.post('/', usersController.login);

module.exports = router;
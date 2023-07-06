// routes/users.route.js

const express = require('express');
const router = express.Router();
const usersController = require('../controller/api_user.controller');

router.get('/:id', usersController.getUser);
// router.post('/', usersController.create);
router.post('/', usersController.login);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;
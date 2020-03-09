const router = require('express').Router();
const UserController = require('../Controllers/UserController');

// USER
router.post('/users/login', UserController.login);
router.post('/users/register', UserController.register);

module.exports = router;
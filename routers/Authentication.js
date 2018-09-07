const express = require('express');

const AuthController = require('../controllers/AuthController.js');

const router = express.Router();


router.post('/login', AuthController.Login);


module.exports = router;
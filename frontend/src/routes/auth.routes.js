const express = require('express');
const router = express.Router();

// Import the controllers
const authController = require('../controllers/auth.controller');

// Routes
router
    .get('/login', authController.login)
    .get('/register', authController.register);

module.exports = router;
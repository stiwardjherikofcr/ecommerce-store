const express = require('express');
const router = express.Router();

// Import the controllers
const indexController = require('../controllers/index.controller');

// Routes
router.get('/', indexController.index);

module.exports = router;

const express = require('express');
const router = express.Router();

// Importing controllers
const productController = require('../controllers/product.controller');

// Routes
router
    .get('/add', productController.renderProductForm)
    .post('/add', productController.createNewProduct)
    .get('/', productController.renderProducts)
    .get('/edit/:id', productController.renderEditForm)
    .put('/edit/:id', productController.updateProduct)
    .delete('/delete/:id', productController.deleteProduct);

module.exports = router;

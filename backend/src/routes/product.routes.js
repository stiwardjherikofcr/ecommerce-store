import { Router } from 'express';
import productController from '../controllers/product.controller.js';

const router = Router();

// Routes
router
    .get('/', productController.getProducts)
    .get('/:id', productController.getProduct)
    .post('/', productController.createProduct)
    .put('/:id', productController.updateProduct)
    .delete('/:id', productController.deleteProduct);

export default router;
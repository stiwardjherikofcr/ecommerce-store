import { Router } from 'express';
import uploadFile from '../middleware/upload.js';
import productController from '../controllers/product.controller.js';

const router = Router();

// Routes
router
    .get('/', productController.getProducts)
    .get('/:id', productController.getProduct)
    .post('/', uploadFile('products').single('image'), productController.createProduct)
    .put('/:id', uploadFile('products').single('image'), productController.updateProduct)
    .delete('/:id', productController.deleteProduct);

export default router;
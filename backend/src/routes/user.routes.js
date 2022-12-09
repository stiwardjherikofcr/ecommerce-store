import { Router } from 'express';
import userController from '../controllers/user.controller.js';

const router = Router();

// Routes
router
    .get('/', userController.getUsers)
    .get('/:id', userController.getUser)
    .post('/', userController.createUser)
    .put('/:id', userController.updateUser)
    .delete('/:id', userController.deleteUser);

export default router;
import { Router } from 'express';
import uploadFile from '../middleware/upload.js';
import authController from '../controllers/auth.controller.js';

const router = Router();

// Routes
router
    .post('/signup', uploadFile('users').single('image'), authController.signUp)
    .post('/signin', authController.signIn)
    .get('/signout', authController.signOut);

export default router;
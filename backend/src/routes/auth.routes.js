import { Router } from 'express';
import authController from '../controllers/auth.controller.js';

const router = Router();

// Routes
router
    .post('/signup', authController.signUp)
    .post('/signin', authController.signIn)
    .get('/signout', authController.signOut);

export default router;
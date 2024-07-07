import { login, logout, privateRoutes, refreshToken, register } from '@/controllers';
import { validateCredentials } from '@/middlewares';
import express from 'express';

const router = express.Router();

router.post('/register', validateCredentials, register);
router.post('/login', validateCredentials, login);
router.get('/refresh', refreshToken);
router.get('/private-route', privateRoutes);
router.post('/logout', logout);

export default router;

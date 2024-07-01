import { login, logout, refreshToken, register } from '@/controllers';
import { validateCredentials } from '@/middlewares';
import express from 'express';

const router = express.Router();

router.post('/register', validateCredentials, register);
router.post('/login', validateCredentials, login);
router.post('/refresh', refreshToken);
router.post('/logout', logout);

export default router;

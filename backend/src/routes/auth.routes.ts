import { login, logout, refreshToken, register } from '@/controllers';
import express from 'express';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/refresh', refreshToken);
router.post('/logout', logout);

export default router;

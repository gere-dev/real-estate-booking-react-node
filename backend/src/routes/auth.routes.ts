import { login, refreshToken, register } from '@/controllers';
import express from 'express';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/refresh', refreshToken);

export default router;

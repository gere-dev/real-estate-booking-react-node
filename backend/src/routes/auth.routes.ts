import express from 'express';
import { END_POINTS } from '@/constants';
import { login, logout, privateRoutes, refreshToken, register } from '@/controllers';
import { validateCredentials } from '@/middlewares';

const router = express.Router();

const authEndpoints = END_POINTS.auth;

router.post(authEndpoints.register, validateCredentials, register);
router.post(authEndpoints.login, validateCredentials, login);
router.get(authEndpoints.refresh, refreshToken);
router.get(authEndpoints.private, privateRoutes);
router.post(authEndpoints.private, logout);

export default router;

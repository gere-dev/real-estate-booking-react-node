import { Router } from 'express';
import authRoutes from './auth.routes';
import propertiesRoutes from './properties.route';

const router = Router();

router.use('/auth', authRoutes);
router.use('/properties', propertiesRoutes);

export default router;

import { Router } from 'express';
import authRoutes from './auth.routes';
import propertiesRoutes from './properties.route';
import propertyRoutes from './property.route';

const router = Router();

router.use('/auth', authRoutes);
router.use('/properties', propertiesRoutes);
router.use('/property', propertyRoutes);

export default router;

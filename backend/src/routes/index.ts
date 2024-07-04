import { Router } from 'express';
import authRoutes from './auth.routes';
import propertiesRoutes from './properties.route';
import propertyRoutes from './property.route';
import listingsRoutes from './listings.route';

const router = Router();

router.use('/auth', authRoutes);
router.use('/properties', propertiesRoutes);
router.use('/property', propertyRoutes);
router.use('/listings', listingsRoutes);

export default router;

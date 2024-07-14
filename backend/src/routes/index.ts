import { Router } from 'express';
import authRoutes from './auth.routes';
import propertiesRoutes from './properties.route';
import listingsRoutes from './listings.route';

const router = Router();

router.use('/auth', authRoutes);
router.use('/properties', propertiesRoutes);
router.use('/listings', listingsRoutes);

export default router;

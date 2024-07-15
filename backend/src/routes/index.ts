import { Router } from 'express';
import authRoutes from './auth.routes';
import propertiesRoutes from './properties.route';
import listingsRoutes from './listings.route';
import bookingsRoutes from './bookings.route';

const router = Router();

router.use('/auth', authRoutes);
router.use('/properties', propertiesRoutes);
router.use('/listings', listingsRoutes);
router.use('/bookings', bookingsRoutes);

export default router;

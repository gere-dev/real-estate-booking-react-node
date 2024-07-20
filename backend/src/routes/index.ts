import { Router } from 'express';
import authRoutes from './auth.routes';
import propertiesRoutes from './properties.route';
import listingsRoutes from './listings.route';
import bookingsRoutes from './bookings.route';
import { authenticateUser } from '@/middlewares';

const router = Router();

// public routes
router.use('/auth', authRoutes);
router.use('/properties', propertiesRoutes);

// apply authenticateUser middleware globally before protected routes
router.use(authenticateUser);

// protected routes
router.use('/listings', listingsRoutes);
router.use('/bookings', bookingsRoutes);

export default router;

import { Router } from 'express';
import authRoutes from './auth.routes';
import propertiesRoutes from './properties.route';
import listingsRoutes from './listings.route';
import bookingsRoutes from './bookings.route';
import { isAuthenticated, isAuthorized } from '@/middlewares';

const router = Router();

// public routes
router.use('/auth', authRoutes);
router.use('/properties', propertiesRoutes);

// apply isAuthenticated middleware globally before protected routes
router.use(isAuthenticated, isAuthorized);

// protected routes
router.use('/listings', listingsRoutes);
router.use('/bookings', bookingsRoutes);

export default router;

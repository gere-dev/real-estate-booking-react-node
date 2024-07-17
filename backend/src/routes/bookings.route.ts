import { Router } from 'express';
import { createBooking, getAllBookings } from '@/controllers';
import { authenticateUser } from '@/middlewares';

const router = Router();

router.get('/get-all-bookings', authenticateUser, getAllBookings);
router.post('/create', authenticateUser, createBooking);
export default router;

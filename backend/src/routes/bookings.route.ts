import { Router } from 'express';
import { createBooking, deleteBooking, getAllBookings } from '@/controllers';
import { authenticateUser } from '@/middlewares';

const router = Router();

router.get('/get-all-bookings', authenticateUser, getAllBookings);
router.post('/create', authenticateUser, createBooking);
router.delete('/delete/:booking_id', authenticateUser, deleteBooking);
export default router;

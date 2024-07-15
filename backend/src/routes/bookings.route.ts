import { Router } from 'express';
import { getAllBookings } from '@/controllers';
import { authenticateUser } from '@/middlewares';

const router = Router();

router.get('/get-all-bookings', authenticateUser, getAllBookings);
export default router;

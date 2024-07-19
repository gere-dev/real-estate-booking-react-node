import { Router } from 'express';
import { createBooking, deleteBooking, getAllBookings } from '@/controllers';
import { authenticateUser } from '@/middlewares';
import { END_POINTS } from '@/constants';

const router = Router();
const endpoints = END_POINTS.bookings;
router.get(endpoints.getAll, authenticateUser, getAllBookings);
router.post(endpoints.create, authenticateUser, createBooking);
router.delete(endpoints.delete, authenticateUser, deleteBooking);
export default router;

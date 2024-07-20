import { Router } from 'express';
import { createBooking, deleteBooking, getAllBookings } from '@/controllers';
import { END_POINTS } from '@/constants';

const router = Router();
const endpoints = END_POINTS.bookings;
router.get(endpoints.getAll, getAllBookings);
router.post(endpoints.create, createBooking);
router.delete(endpoints.delete, deleteBooking);
export default router;

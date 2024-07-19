import { END_POINTS } from '@/constants';
import { createListing, deleteListing, getListings, updateListing } from '@/controllers';
import { upload } from '@/middlewares';
import { Router } from 'express';

const router = Router();

const endpoints = END_POINTS.listings;
router.get(endpoints.getAll, getListings);
router.post(endpoints.create, upload.array('images'), createListing);
router.put(endpoints.update, upload.array('images'), updateListing);
router.delete(endpoints.delete, deleteListing);
export default router;

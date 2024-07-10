import { createListing, getListings, updateListing } from '@/controllers';
import { upload } from '@/middlewares';
import { Router } from 'express';

const router = Router();

router.get('/fetch', getListings);
router.post('/create', upload.array('images'), createListing);
router.put('/update-listings/:propertyId', upload.array('images'), updateListing);
export default router;

import { createListing, getListings } from '@/controllers';
import { upload } from '@/middlewares';
import { Router } from 'express';

const router = Router();

router.get('/fetch', getListings);
router.post('/create', upload.array('images'), createListing);
export default router;

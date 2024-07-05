import { AddListing, getListings } from '@/controllers';
import { upload } from '@/middlewares';
import { Router } from 'express';

const router = Router();

router.get('/', getListings);
router.post('/add-listing', upload.array('images'), AddListing);
export default router;

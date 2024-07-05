import { createListing, getListings } from '@/controllers';
import { upload } from '@/middlewares';
import { Router } from 'express';

const router = Router();

router.get('/', getListings);
router.post('/', upload.array('images'), createListing);
export default router;

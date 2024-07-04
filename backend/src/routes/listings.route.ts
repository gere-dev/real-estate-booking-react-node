import { getListings } from '@/controllers';
import { Router } from 'express';

const router = Router();

router.get('/', getListings);
export default router;

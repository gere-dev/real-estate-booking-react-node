import { filterProperties, getAllProperties, getPropertyById } from '@/controllers';
import { Router } from 'express';

const router = Router();

router.get('/get-all-properties', getAllProperties);
router.get('/filter', filterProperties);
router.get('/get-by-id/:id', getPropertyById);

export default router;

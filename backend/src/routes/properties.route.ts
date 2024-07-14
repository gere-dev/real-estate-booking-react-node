import { filterProperties, getProperties } from '@/controllers';
import { Router } from 'express';

const router = Router();

router.get('/get-all-properties', getProperties);
router.get('/filter', filterProperties);

export default router;

import { filterProperties, getProperty } from '@/controllers';
import { Router } from 'express';

const router = Router();

router.get('/fetch/:id', getProperty);
router.get('/filter-by', filterProperties);
export default router;

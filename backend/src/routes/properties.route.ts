import { Router } from 'express';
import { filterProperties, getAllProperties, getPropertyById } from '@/controllers';
import { END_POINTS } from '@/constants';
const router = Router();

const endpoints = END_POINTS.properties;

router.get(endpoints.getAll, getAllProperties);
router.get(endpoints.filter, filterProperties);
router.get(endpoints.getById, getPropertyById);

export default router;

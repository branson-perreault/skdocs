import express from 'express';
import { apiErrorHandler } from './errorHandler';
import { apiMiddleware } from './middleware';

import { getDoctor, getDoctors } from '../../handlers/doctors';
import { getLocation, getLocations } from '../../handlers/locations';

const router = express.Router();

// Happy path stack
router.use(apiMiddleware);
router.get('/locations', getLocations);
router.get('/locations/:uuid', getLocation);
router.get('/doctors', getDoctors);
router.get('/doctors/:uuid', getDoctor);

// Sad path stack
router.use(apiErrorHandler);

export default router;

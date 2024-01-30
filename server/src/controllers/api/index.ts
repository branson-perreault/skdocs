import express from 'express';
import { apiErrorHandler } from './errorHandler';
import { apiMiddleware } from './middleware';

import { createDoctor, getDoctor, getDoctors } from '../../handlers/doctors';
import { getDoctorLocation, getLocation, getLocations } from '../../handlers/locations';

const router = express.Router();

// Happy path stack
router.use(apiMiddleware);
router.get('/locations', getLocations);
router.get('/locations/:uuid', getLocation);
router.get('/doctors', getDoctors);
router.get('/doctors/:uuid', getDoctor);
router.get('/doctors/:uuid/locations', getDoctorLocation);
router.post('/doctors', createDoctor);

// Sad path stack
router.use(apiErrorHandler);

export default router;

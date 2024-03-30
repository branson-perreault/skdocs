import express from 'express';
import { apiErrorHandler } from './errorHandler';
import { apiMiddleware } from './middleware';

import { createDoctor, getDoctor, listDoctors } from '../../handlers/doctors';
import { listDoctorLocations, getLocation, listLocations } from '../../handlers/locations';
import { createTip, getTip, listTips } from '../../handlers/tips';

const router = express.Router();

// Happy path stack
router.use(apiMiddleware);
router.get('/locations', listLocations);
router.get('/locations/:uuid', getLocation);

router.get('/doctors', listDoctors);
router.get('/doctors/:uuid', getDoctor);
router.get('/doctors/:uuid/locations', listDoctorLocations);
router.post('/doctors', createDoctor);

router.get('/tips', listTips);
router.get('/tips/:uuid', getTip);
router.post('/tips', createTip);

// Sad path stack
router.use(apiErrorHandler);

export default router;

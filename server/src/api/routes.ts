import express from 'express';
import { apiErrorHandler } from './errorHandler';
import { apiMiddleware } from './middleware';

import { getDoctor, getDoctors } from './handlers/doctors';
import { getLocation, getLocations } from './handlers/locations';

export const apiController = express.Router();

// Happy path stack
apiController.use(apiMiddleware);
apiController.get('/locations', getLocations);
apiController.get('/locations/:uuid', getLocation);
apiController.get('/doctors', getDoctors);
apiController.get('/doctors/:uuid', getDoctor);

// Sad path stack
apiController.use(apiErrorHandler);

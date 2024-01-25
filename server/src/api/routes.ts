import express from 'express';
import { getLocation, getLocations } from './handlers';
import { apiErrorHandler } from './errorHandler';
import { apiMiddleware } from './middleware';

export const apiController = express.Router();

// Happy path stack
apiController.use(apiMiddleware);
apiController.get('/locations', getLocations);
apiController.get('/locations/:uuid', getLocation);

// Sad path stack
apiController.use(apiErrorHandler);

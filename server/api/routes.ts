import express from 'express';
import { getIndex } from './handlers';

export const apiController = express.Router();

apiController.get('/api', getIndex);


import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';

// Must init firestore before importing controllers
require('./firestore/init');

import dotenv from 'dotenv';
import path from 'path';

import apiController from './controllers/api';
import clientController from './controllers/client';
import { corsPolicy } from './middleware/cors';

dotenv.config({ path: path.join(__dirname, `.env`)});
if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.set("port", PORT);

// Middleware
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(corsPolicy);

// Routing
app.use('/api', apiController);
app.use('/', clientController);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});

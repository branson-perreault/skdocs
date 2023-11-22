import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';

import { apiController } from './api/routes';

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.set("port", PORT);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(apiController);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});

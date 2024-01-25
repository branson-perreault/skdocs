import { dataPoint } from './converter';
import type { Location } from 'location';

const db = {
    locations: dataPoint<Location>('locations')
}

export default db;

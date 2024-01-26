import { dataPoint } from './converter';
import { Doctor, Location } from '../types';

const db = {
    locations: dataPoint<Location>('locations'),
    doctors: dataPoint<Doctor>('doctors')
}

export default db;

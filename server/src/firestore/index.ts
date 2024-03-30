import { dataPoint } from './converter';
import { Doctor, Location, Tip } from '../../../types';
import { DoctorLocationJunction } from '../../../types/junctions/doctor_location';

const db = {
    locations: dataPoint<Location>('locations'),
    doctors: dataPoint<Doctor>('doctors'),
    doctorsLocationsJunction: dataPoint<DoctorLocationJunction>('junction_doctors_locations'),
    tips: dataPoint<Tip>('tips')
}

export default db;

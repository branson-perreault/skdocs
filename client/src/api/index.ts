import axios from 'axios';
import { Doctor } from '../../../types';

const listDoctors = (): Promise<Doctor[]> => {
    return axios.get('/api/doctors').then(response => {
        return [];
    });
};

const exports = {
    listDoctors
};

export default exports;

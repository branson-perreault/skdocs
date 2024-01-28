import axios from 'axios';
import { Doctor } from '../../../types';

const listDoctors = (): Promise<Doctor[]> => {
    return axios.get(
        'http://localhost:8090/api/doctors',
        {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Request-Method': 'GET',
                'Access-Control-Request-Headers': 'Content-Type, Accept',
                'Origin': 'http://localhost:3021',
            }
        }
    ).then(response => {
        return response.data;
    });
};

const exports = {
    listDoctors
};

export default exports;

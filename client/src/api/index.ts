import axios from 'axios';
import { Doctor, Location } from '../../../types';

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Request-Method': 'GET',
    'Access-Control-Request-Headers': 'Content-Type, Accept',
    'Origin': 'http://localhost:3021',
};

const getDoctor = (uuid: string): Promise<Doctor> => {
    return axios.get(
        `http://localhost:8090/api/doctors/${uuid}`,
        {
            headers
        }
    ).then(response => {
        return response.data;
    });
};


const listDoctors = (): Promise<Doctor[]> => {
    return axios.get(
        'http://localhost:8090/api/doctors',
        {
            headers
        }
    ).then(response => {
        return response.data;
    });
};

const getLocation = (uuid: string): Promise<Location> => {
    return axios.get(
        `http://localhost:8090/api/locations/${uuid}`,
        {
            headers
        }
    ).then(response => {
        return response.data;
    });
};


const listLocations = (): Promise<Location[]> => {
    return axios.get(
        'http://localhost:8090/api/locations',
        {
            headers
        }
    ).then(response => {
        return response.data;
    });
};

const listDoctorLocations = (uuid: string): Promise<Location[]> => {
    return axios.get(
        `http://localhost:8090/api/doctors/${uuid}/locations`,
        {
            headers
        }
    ).then(response => {
        return response.data;
    });
};

const exports = {
    getDoctor,
    getLocation,
    listDoctors,
    listLocations,
    listDoctorLocations
};

export default exports;

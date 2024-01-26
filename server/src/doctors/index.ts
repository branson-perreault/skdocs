import repository from './repository';
import { Doctor } from '../types';
import { NotFound } from '../errors/notfound';

const getDoctor = (uuid: string): Promise<Doctor> => {
    return repository.getDoctor(uuid).then(location => {
        if (location === null) {
            throw new NotFound('Doctor was not found');
        }
        return location;
    });
};

const listDoctors = (): Promise<Doctor[]> => {
    return repository.listDoctors();
};

export default {
    getDoctor,
    listDoctors,
};

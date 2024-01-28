import repository from './repository';
import { CreateDoctorRequest, Doctor } from '../../../types';
import { NotFound } from '../errors/notfound';

const getDoctor = (uuid: string): Promise<Doctor> => {
    return repository.getDoctor(uuid).then(doctor => {
        if (doctor === null) {
            throw new NotFound('Doctor was not found');
        }
        return doctor;
    });
};

const listDoctors = (): Promise<Doctor[]> => {
    return repository.listDoctors();
};

const createDoctor = (request: CreateDoctorRequest): Promise<Doctor> => {
    return repository.createDoctor(request);
};

export default {
    getDoctor,
    listDoctors,
    createDoctor
};

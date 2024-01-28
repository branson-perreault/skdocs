import repository from './repository';
import { CreateDoctorRequest, Doctor } from '../../../types';
import { NotFound } from '../errors/notfound';
import { Conflict } from '../errors/conflict';

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
    return repository.createDoctor(request).then(doctor => {
        if (!doctor) {
            throw new Conflict();
        }
        return doctor as Doctor;
    });
};

export default {
    getDoctor,
    listDoctors,
    createDoctor
};

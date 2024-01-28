import db from '../firestore';
import { v4 as uuidv4 } from 'uuid';
import { CreateDoctorRequest, Doctor } from '../../../types';
import { Conflict } from '../errors/conflict';

const getDoctor = async (uuid: string): Promise<Doctor | null> => {
    const snapshot = await db.doctors.where('uuid', '==', uuid).get();
    if (snapshot.empty) {
        return null;
    }
    return snapshot.docs.shift()?.data() || null;
};

const listDoctors = async (): Promise<Doctor[]> => {
    const snapshots = await db.doctors.get();
    return snapshots.docs.map(doc => doc.data());
};

const createDoctor = async (request: CreateDoctorRequest): Promise<Doctor | null> => {
    const uuid = uuidv4();
    const now = new Date();
    const existingDoc = await getDoctor(uuid);
    if (existingDoc) {
        throw new Conflict();
    }

    const doc = db.doctors.doc();
    await doc.set({
        first_name: request.firstName,
        last_name: request.lastName,
        physician_id: request.physicianId,
        accepting: request.accepting,
        uuid,
        created: now,
        updated: now
    });

    return getDoctor(uuid);
};

export default {
    getDoctor,
    listDoctors,
    createDoctor
};

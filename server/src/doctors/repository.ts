import db from '../firestore';

const getDoctor = async (uuid: string) => {
    const snapshot = await db.doctors.where('uuid', '==', uuid).get();
    if (snapshot.empty) {
        return null;
    }
    return snapshot.docs.shift().data();
}

const listDoctors = async () => {
    const snapshots = await db.doctors.get();
    return snapshots.docs.map(doc => doc.data());
};

export default {
    getDoctor,
    listDoctors
};

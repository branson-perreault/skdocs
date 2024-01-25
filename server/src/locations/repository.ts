import db from '../firestore';

const getLocation = async (uuid: string) => {
    const snapshot = await db.locations.where('uuid', '==', uuid).get();
    if (snapshot.empty) {
        return null;
    }
    return snapshot.docs.shift().data();
}

const listLocations = async () => {
    const snapshots = await db.locations.get();
    return snapshots.docs.map(doc => doc.data());
};

export default {
    getLocation,
    listLocations
};

import db from '../firestore';
import { Location } from '../../../types';

const getLocation = async (uuid: string) => {
    const snapshot = await db.locations.where('uuid', '==', uuid).get();
    if (snapshot.empty) {
        return null;
    }
    return snapshot.docs.shift()?.data() || null;
}

const listLocations = async (): Promise<Location[]> => {
    const snapshots = await db.locations.get();
    return snapshots.docs.map(doc => doc.data());
};

export default {
    getLocation,
    listLocations
};

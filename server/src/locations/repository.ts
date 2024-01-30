import db from '../firestore';
import { Location } from '../../../types';

const getLocation = async (uuid: string) => {
    const snapshot = await db.locations.where('uuid', '==', uuid).get();
    if (snapshot.empty) {
        return null;
    }
    return snapshot.docs.shift()?.data() || null;
};

const listLocations = async (): Promise<Location[]> => {
    const snapshots = await db.locations.get();
    return snapshots.docs.map(doc => doc.data());
};

const listLocationsByDoctor = async (uuid: string): Promise<Location[]> => {
    const junctions = await db.doctorsLocationsJunction.where('doctor_uuid', '==', uuid).get();
    const locations = await Promise.all(
        junctions.docs
            .filter(junction => junction.exists)
            .map(junction => db.locations.doc(junction.data().location_id).get())
    );

    return locations.filter(doc => doc.exists).map(doc => doc.data() as Location);
};

export default {
    getLocation,
    listLocations,
    listLocationsByDoctor
};

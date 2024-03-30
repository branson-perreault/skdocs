import db from '../firestore';
import { Tip } from '../../../types';

const getTip = async (uuid: string) => {
    const snapshot = await db.tips.where('uuid', '==', uuid).get();
    if (snapshot.empty) {
        return null;
    }
    return snapshot.docs.shift()?.data() || null;
};

const listTips = async (): Promise<Tip[]> => {
    const snapshots = await db.tips.get();
    return snapshots.docs.map(doc => doc.data());
};

export default {
    getTip,
    listTips
};

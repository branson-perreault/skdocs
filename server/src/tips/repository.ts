import db from '../firestore';
import { CreateTipRequest, Tip } from '../../../types';
import { v4 as uuidv4 } from 'uuid';
import { Conflict } from '../errors/conflict';

const getTip = async (uuid: string) => {
    const snapshot = await db.tips.where('uuid', '==', uuid).get();
    if (snapshot.empty) {
        return null;
    }
    return snapshot.docs.shift()?.data() || null;
};

const listTips = async (verified?: boolean): Promise<Tip[]> => {
    let collectionReference;
    if (typeof verified == 'boolean') {
        collectionReference = db.tips.where('verified', '==', verified);
    } else {
        collectionReference = db.tips;
    }
    const snapshots = await collectionReference.orderBy('updated', 'desc').get();
    return snapshots.docs.map(doc => doc.data());
};

const createTip = async (request: CreateTipRequest): Promise<Tip | null> => {
    const uuid = uuidv4();
    const now = new Date();
    const existingTip = await getTip(uuid);
    if (existingTip) {
        throw new Conflict();
    }

    const doc = db.tips.doc();
    await doc.set({
        uuid,
        verified: false,
        message: request.message,
        created: now,
        updated: now
    });

    return getTip(uuid);
};

export default {
    getTip,
    listTips,
    createTip
};

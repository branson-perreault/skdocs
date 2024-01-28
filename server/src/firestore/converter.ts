import { firestore } from 'firebase-admin';
import FirestoreDataConverter = firestore.FirestoreDataConverter;
import DocumentData = firestore.DocumentData;
import Timestamp = firestore.Timestamp;

export const converter = <T extends DocumentData>(): FirestoreDataConverter<T, DocumentData> => ({
    toFirestore: (data: T) => data,
    fromFirestore: (snap: firestore.QueryDocumentSnapshot) => {
        const toReturn = snap.data();
        Object.keys(toReturn).forEach(key=> {
            if (toReturn[key] instanceof Timestamp) {
                const dateValue = new Date(1970, 0, 1);
                dateValue.setSeconds(toReturn[key]._seconds);
                toReturn[key] = dateValue;
            }
        })

        return toReturn as T;
    }
});

export const dataPoint = <T extends DocumentData>(collectionPath: string) =>
    firestore()
        .collection(collectionPath)
        .withConverter<T>(converter<T>());

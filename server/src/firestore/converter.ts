import { firestore } from 'firebase-admin';

export const converter = <T>() => ({
    toFirestore: (data: T) => data,
    fromFirestore: (snap: firestore.QueryDocumentSnapshot) => snap.data() as T
});

export const dataPoint = <T>(collectionPath: string) =>
    firestore()
        .collection(collectionPath)
        .withConverter(converter<T>());

import serviceAccount from './serviceAccountKey.json';
import { cert, initializeApp } from 'firebase-admin/app';

initializeApp({
    credential: cert({
        projectId: serviceAccount.project_id,
        clientEmail: serviceAccount.client_email,
        privateKey: serviceAccount.private_key,
    })
});

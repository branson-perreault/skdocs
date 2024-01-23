import { cert, initializeApp } from 'firebase-admin/app';

import serviceAccount from './skdocs-306-3e384ccf6ba1.json';

initializeApp({
    credential: cert({
        projectId: serviceAccount.project_id,
        clientEmail: serviceAccount.client_email,
        privateKey: serviceAccount.private_key,
    }),
});

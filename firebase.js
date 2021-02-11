import firebase from 'firebase/app';
import 'firebase/auth';

let app;

//condition needed to check if a firebase app already exists
if (firebase.apps.length === 0) {
  app = firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
  });
}

export const appAuth = app.auth();
export default app;

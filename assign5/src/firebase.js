import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// //   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// });

const firebaseConfig = {
    apiKey: "AIzaSyDbRLNJHdZc0oa-IlCxWDQ4VaQnWM0etN8",
    authDomain: "auth-devlopment-5aacf.firebaseapp.com",
    projectId: "auth-devlopment-5aacf",
    storageBucket: "auth-devlopment-5aacf.appspot.com",
    messagingSenderId: "450231078843",
    appId: "1:450231078843:web:4938b2c4b4436552eafe9e"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app

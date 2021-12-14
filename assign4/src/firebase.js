// Import the functions you need from the SDKs you need
import firebase from 'firebase';
import 'firebase/auth';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5nELz4abvtSgVYkNKql6ii5V_-xJHsPA",
  authDomain: "learn-auth-bf57e.firebaseapp.com",
  projectId: "learn-auth-bf57e",
  storageBucket: "learn-auth-bf57e.appspot.com",
  messagingSenderId: "482287984756",
  appId: "1:482287984756:web:aa0c8f6456931e9ccdf121"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = app.auth();
export default app;
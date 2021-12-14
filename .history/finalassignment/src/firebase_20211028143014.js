// import firebase from 'firebase/compat/dist/app';
// import 'firebase/database'

import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCY0GXjXd7uOSQEG1_hYhTBO2Rbwx4RFdw",
  authDomain: "react-crud-d275a.firebaseapp.com",
  databaseURL: "https://react-crud-d275a-default-rtdb.firebaseio.com",
  projectId: "react-crud-d275a",
  storageBucket: "react-crud-d275a.appspot.com",
  messagingSenderId: "106783588214",
  appId: "1:106783588214:web:167055a6aa21af137c0457"
};

  // Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
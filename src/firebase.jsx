// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9hf5oM4lu8dLe7JD-yqwdZ5lCVy07Tqo",
  authDomain: "intern-project-633be.firebaseapp.com",
  projectId: "intern-project-633be",
  storageBucket: "intern-project-633be.appspot.com",
  messagingSenderId: "694470031416",
  appId: "1:694470031416:web:53d05805af67fa2fb44ecd",
  measurementId: "G-Z80ZZNCMQM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export {db};
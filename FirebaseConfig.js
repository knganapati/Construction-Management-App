
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9CskNPYInuVk-KPwYMv7ss2Ew-rywQrw",
  authDomain: "build-craf.firebaseapp.com",
  projectId: "build-craf",
  storageBucket: "build-craf.appspot.com",
  messagingSenderId: "744759880504",
  appId: "1:744759880504:web:c81edb9f8edea95b34afcd",
  measurementId: "G-8F9BF6DG25"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeApp(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore}   from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI-qWNyuN7rSwMRHERb305dKlUvvpAYQ0",
  authDomain: "vite-contact-44e0e.firebaseapp.com",
  projectId: "vite-contact-44e0e",
  storageBucket: "vite-contact-44e0e.firebasestorage.app",
  messagingSenderId: "672216610691",
  appId: "1:672216610691:web:1d13afa175e1ab6df368b6",
  measurementId: "G-YHCKKLZ7MB"
};

// Initialize Firebase
 export    const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
const analytics = getAnalytics(app);
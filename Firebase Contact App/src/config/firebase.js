import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Get the Firebase API Key from the environment variable
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "vite-contact-44e0e.firebaseapp.com",
  projectId: "vite-contact-44e0e",
  storageBucket: "vite-contact-44e0e.appspot.com",
  messagingSenderId: "672216610691",
  appId: "1:672216610691:web:1d13afa175e1ab6df368b6",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

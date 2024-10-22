// src/firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAuth } from "firebase/auth"; // Import Auth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAia3TSn1JYjCbKo1-W8QSPxLE7HBrUkWU",
  authDomain: "portfolio-ccf46.firebaseapp.com",
  projectId: "portfolio-ccf46",
  storageBucket: "portfolio-ccf46.appspot.com",
  messagingSenderId: "392107103425",
  appId: "1:392107103425:web:811c6f670bfef70ef5f040",
  measurementId: "G-GQ27SKGVYV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Initialize Analytics
const db = getFirestore(app); // Initialize Firestore
const auth = getAuth(app); // Initialize Auth

// Export the db and auth to use in your app
export { db, auth };


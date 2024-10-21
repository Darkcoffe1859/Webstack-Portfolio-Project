// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import getAuth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAxu77YtgpD4Tq5w-Wcw0OeMGf2bfWSB0",
  authDomain: "portfolio-71e36.firebaseapp.com",
  projectId: "portfolio-71e36",
  storageBucket: "portfolio-71e36.appspot.com",
  messagingSenderId: "73367674325",
  appId: "1:73367674325:web:ad682dac098d3dd75bb15c",
  measurementId: "G-VR56BDMDZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize auth

export { auth }; // Make sure to export auth here


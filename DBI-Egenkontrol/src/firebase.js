// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOLChK2gO4huD6mKD0k59cwgKOQ90Cd3A",
  authDomain: "mfd2025-eksamen.firebaseapp.com",
  projectId: "mfd2025-eksamen",
  storageBucket: "mfd2025-eksamen.firebasestorage.app",
  messagingSenderId: "99743744582",
  appId: "1:99743744582:web:1f73a77f7257fb26ab8047",
  measurementId: "G-VZD1L2HBN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export { db }
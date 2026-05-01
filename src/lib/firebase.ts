// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKOHuP-7AfQiBXlFT5hYHwBHtUSeoP7mk",
  authDomain: "tara-66a95.firebaseapp.com",
  projectId: "tara-66a95",
  storageBucket: "tara-66a95.firebasestorage.app",
  messagingSenderId: "587862020138",
  appId: "1:587862020138:web:36e0d9f7b9f1a9460ff353",
  measurementId: "G-SR38WMYTE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Services
export const auth = getAuth(app);
export const db = getFirestore(app);
"use client";
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSF05OHPgKBbAAh04py2y1F7b-BWqg0WM",
  authDomain: "twiter-3c6e9.firebaseapp.com",
  projectId: "twiter-3c6e9",
  storageBucket: "twiter-3c6e9.firebasestorage.app",
  messagingSenderId: "946390842240",
  appId: "1:946390842240:web:68d951ea667da7fa481f65",
  measurementId: "G-VJ6C4CCHGH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;

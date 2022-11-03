// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBOcky54_dtjSQLMOTy9A4q7B54Pi38c3Q",
  authDomain: "fir-login-908c6.firebaseapp.com",
  projectId: "fir-login-908c6",
  storageBucket: "fir-login-908c6.appspot.com",
  messagingSenderId: "408517321081",
  appId: "1:408517321081:web:c6c82a9199a01f3c434fa8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
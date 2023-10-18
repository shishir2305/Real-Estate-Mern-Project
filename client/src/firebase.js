// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-351dd.firebaseapp.com",
  projectId: "mern-estate-351dd",
  storageBucket: "mern-estate-351dd.appspot.com",
  messagingSenderId: "524112707110",
  appId: "1:524112707110:web:435bba41677416b03bb0e7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

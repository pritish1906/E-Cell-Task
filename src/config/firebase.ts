// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0hA2Bc74PEzeuoahNApERIEkxFqv_jSo",
  authDomain: "techteamexpansion23.firebaseapp.com",
  projectId: "techteamexpansion23",
  storageBucket: "techteamexpansion23.appspot.com",
  messagingSenderId: "542718392377",
  appId: "1:542718392377:web:bf6178e1b28494fe8c35e8",
  measurementId: "G-39B1R2EWV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
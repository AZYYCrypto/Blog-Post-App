// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
//Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCqAfXS_gZr77vCp1BKqSZjQ33D3e5PFwE",
  authDomain: "blog-post-app-17eeb.firebaseapp.com",
  projectId: "blog-post-app-17eeb",
  storageBucket: "blog-post-app-17eeb.appspot.com",
  messagingSenderId: "267269319948",
  appId: "1:267269319948:web:df2df0412950872aa4ed29",
  measurementId: "G-53KGHQQ7PM",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

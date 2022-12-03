import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJMDaYN3ph1w2AxWAxhzrERRhOX7kYsfY",
  authDomain: "preoyecto-peluqueria.firebaseapp.com",
  projectId: "preoyecto-peluqueria",
  storageBucket: "preoyecto-peluqueria.appspot.com",
  messagingSenderId: "941603674843",
  appId: "1:941603674843:web:e4bc69bfe8dec10a544afe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
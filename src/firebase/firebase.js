// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBukTsxc-G0qy7vilev7EJglMqK3aEL3gQ",
  authDomain: "medium-3ae06.firebaseapp.com",
  projectId: "medium-3ae06",
  storageBucket: "medium-3ae06.appspot.com",
  messagingSenderId: "913524518327",
  appId: "1:913524518327:web:56175bbffb534522b1cc32",
  measurementId: "G-LXEYYW65VZ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzTkWcj7slwQGdKUAhMK9kydX5YUeLDMw",
  authDomain: "coding-mantra.firebaseapp.com",
  projectId: "coding-mantra",
  storageBucket: "coding-mantra.firebasestorage.app",
  messagingSenderId: "806971548211",
  appId: "1:806971548211:web:c4c257d85834838597b946",
  measurementId: "G-54464B0QVT"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


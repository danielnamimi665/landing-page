import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCFid5Ocz_ALmbGufL3Ka3Q4QEdJc8oFC4",
  authDomain: "daniel-namimi-leads.firebaseapp.com",
  projectId: "daniel-namimi-leads",
  storageBucket: "daniel-namimi-leads.firebasestorage.app",
  messagingSenderId: "601200352962",
  appId: "1:601200352962:web:8f519ec57a697c232ce55b",
  measurementId: "G-6TQSRQJSEN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }; 
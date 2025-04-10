import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCIqpfI8uoJKm4l5jlI29kICTgRlx6JFAM",
  authDomain: "clone-271a9.firebaseapp.com",
  projectId: "clone-271a9",
  storageBucket: "clone-271a9.firebasestorage.app",
  messagingSenderId: "502649968851",
  appId: "1:502649968851:web:4ec07793286ac8e146dc26",
  measurementId: "G-DK74EMKVGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
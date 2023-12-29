// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA65t8xguBNFbQk6sZLBAefnJaO_ODpnFk",
    authDomain: "itcomp-e2a3a.firebaseapp.com",
    projectId: "itcomp-e2a3a",
    storageBucket: "itcomp-e2a3a.appspot.com",
    messagingSenderId: "1074000179058",
    appId: "1:1074000179058:web:5625d94e67fccb4c55b7eb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth instance
const auth = getAuth(app);

// Firestore instance
const db = getFirestore(app);

// Storage instance
const storage = getStorage(app);

export { auth, db, storage, app as firebase };
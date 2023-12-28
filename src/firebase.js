// src/firebase.js
import { initializeApp } from 'firebase/app';
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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, app as firebase };
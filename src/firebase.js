import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA1s992WG4VpS6cIDXW8GIlhXib53zCdD4",
    authDomain: "my-blog-701a7.firebaseapp.com",
    databaseURL: "https://my-blog-701a7-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "my-blog-701a7",
    storageBucket: "my-blog-701a7.appspot.com",
    messagingSenderId: "110187964212",
    appId: "1:110187964212:web:daaa1133a7890f1af0a761",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage, app as firebase };

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyBEr50mIQyP9hJKrTKUlUSK3AvvN2ikHng",
    authDomain: "react-app-8cd76.firebaseapp.com",
    projectId: "react-app-8cd76",
    storageBucket: "react-app-8cd76.appspot.com",
    messagingSenderId: "598067381063",
    appId: "1:598067381063:web:fb4c891a62109cfad30262"
};

export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
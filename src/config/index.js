import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
// import { getStore } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBTFkgIZgMH3pvLqrI0IVPcwMW1GstHtyk",
    authDomain: "rede-social-app-927fe.firebaseapp.com",
    projectId: "rede-social-app-927fe",
    storageBucket: "rede-social-app-927fe.appspot.com",
    messagingSenderId: "276828964884",
    appId: "1:276828964884:web:ddb512b98be7062b3b7f01"
};

initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();


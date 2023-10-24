import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBTFkgIZgMH3pvLqrI0IVPcwMW1GstHtyk",
    authDomain: "rede-social-app-927fe.firebaseapp.com",
    projectId: "rede-social-app-927fe",
    storageBucket: "rede-social-app-927fe.appspot.com",
    messagingSenderId: "276828964884",
    appId: "1:276828964884:web:ddb512b98be7062b3b7f01"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
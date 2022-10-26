// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use


import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-iCn65SnQxLsNk96oqPIH_AE4HCH1e2A",
    authDomain: "orisaz-ecommerce.firebaseapp.com",
    projectId: "orisaz-ecommerce",
    storageBucket: "orisaz-ecommerce.appspot.com",
    messagingSenderId: "405278438859",
    appId: "1:405278438859:web:9b8f030f209f5ac792724e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
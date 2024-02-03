import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC320KshLQ3yqo-KOqDwCVNDGZ6gxi1bG8",
    authDomain: "storepee-c96b2.firebaseapp.com",
    projectId: "storepee-c96b2",
    storageBucket: "storepee-c96b2.appspot.com",
    messagingSenderId: "1086139733401",
    appId: "1:1086139733401:web:43eee2bb6880b3ea7b6f08",
    measurementId: "G-F3NT0Q2EZN"
  };

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Auth


export  { auth,firebaseConfig  };

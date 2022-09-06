// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjhVJNRc2dT1y5jO7pKXcW7CURxLk5Gq4",
  authDomain: "bucklist-app.firebaseapp.com",
  projectId: "bucklist-app",
  storageBucket: "bucklist-app.appspot.com",
  messagingSenderId: "251999978770",
  appId: "1:251999978770:web:a7ae5634b48a66c7e21fcb"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

// INI provider 
const provider = new GoogleAuthProvider();

function login() {
    return signInWithPopup(auth, provider);
};

function logout() {
    return signOut(auth);
};

export { auth, login, logout, onAuthStateChanged };

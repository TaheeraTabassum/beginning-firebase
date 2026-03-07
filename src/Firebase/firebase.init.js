// do not store config on thye client side

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEL4M89bMR_tQ4KwiJxymC5jjeuMG3Vkc",
  authDomain: "beginning-firebase-402af.firebaseapp.com",
  projectId: "beginning-firebase-402af",
  storageBucket: "beginning-firebase-402af.firebasestorage.app",
  messagingSenderId: "248247437068",
  appId: "1:248247437068:web:2e649fc89b6e4abfb4ab29",
  measurementId: "G-QD0J6VVNZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR80RbwASkcjhsT8FUfo2nxQLYUcO_uGE",
  authDomain: "simple-firebase-48b21.firebaseapp.com",
  projectId: "simple-firebase-48b21",
  storageBucket: "simple-firebase-48b21.firebasestorage.app",
  messagingSenderId: "929659021646",
  appId: "1:929659021646:web:9f5952a9c75b81733fd61f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
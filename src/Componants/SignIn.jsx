import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import auth from "../Firebase/firebase.init";


export default function SignIn() {
  const provider = new GoogleAuthProvider();
  async function handleGoogleSignIn() {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
    } catch (error) {
      console.log("ERROR : ", error.message);
    }
  }
  return (
    <div>
      <button onClick={handleGoogleSignIn}>sign in with google</button>
    </div>
  );
}

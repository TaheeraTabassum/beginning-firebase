import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import auth from "../Firebase/firebase.init";
import { useState } from "react";


export default function Login() {
  const [user, setUser] = useState(null);

   const googleProvider =  new GoogleAuthProvider();
   const githubProvider = new GithubAuthProvider();

   async function handleGithubSignIn() {
    signInWithPopup(auth, githubProvider)
    .then ((result)=>{
      console.log(result.user);
      setUser(result.user)
    }) .catch((error)=>{
      console.log("ERROR : ", error.message);
    setUser(null)
    })
    
   }
   async function handleGoogleSignIn() {
  //   signInWithPopup(auth, provider)
  // .then((result) => {
  //   console.log(result.user);
  // })
  // .catch((error) => {
  //   console.log("ERROR:", error.message);
  // });
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log(result.user);
    setUser(result.user);
    
  } catch(error){
    console.log("ERROR : ", error.message);
    setUser(null)
  }
  }
  const auth = getAuth();
  const handleSignOut = ()=> {
    signOut(auth)
    .then(()=>{
      console.log("successfully signed out");
      setUser(null);
    }
      ) .catch((error)=>{
        console.log(error);})
      }
        
  return (
    <div>
        <button className="border border-teal-600 rounded-xl p-2 cursor-pointer" onClick={handleGoogleSignIn}>Login with google</button> 
        <button className="border border-teal-600 rounded-xl p-2 cursor-pointer" onClick={handleGithubSignIn}>Login with Github</button>
      {user &&  <div><div className="flex  justify-center gap-6">
    
      <button className="border border-teal-600 rounded-xl p-2 cursor-pointer" onClick={handleSignOut}>Sign Out</button>
      </div> <div className="flex flex-col items-center"> <h2>{user.displayName}</h2>
      <p>{user.email}</p>
      <img className="max-w-24" src={user.photoURL} alt="" /></div></div>
      }
    </div>
  )
}

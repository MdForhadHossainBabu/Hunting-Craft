import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null)


const FirebaseProvider = ({ children }) => {

 const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true);
 const [profile, setProfile] = useState(null)

 // social auth provider 
 const googleProvider = new GoogleAuthProvider();
 const githubProvider = new GithubAuthProvider();

 
 //create user with email & password
 const createUser = (email, password) => {
  setLoading(true)
 return createUserWithEmailAndPassword(auth, email, password);
 }

 // update user profile 
 const updateUserProfile = (name, photo) => {
  return updateProfile(auth.currentUser, {
   displayName: name,
   photoURL: photo,
  })
   
 }



 //sign in user
 const signInUser = (email, password) => {
  setLoading(true)
  return signInWithEmailAndPassword(auth, email, password);
 }

 // sign in with popup in google 
 const googleLogin = () => {
  setLoading(true)
   return signInWithPopup(auth, googleProvider)
 }
 // sign in with popup in git hub
 const githubLogin = () => {
  setLoading(true)
  return signInWithPopup(auth, githubProvider);
 }

 // signOut
 const logOut = () => {
   return signOut(auth);
 }


 // observer
 useEffect(() => {
  const unSubscribe =  onAuthStateChanged(auth, user => {
   if (user) {
    setUser(user);
    setLoading(false)
    }
  })
  return () => unSubscribe();
 },[])



 const allValues = {
   createUser,
   signInUser,
   googleLogin,
  githubLogin,
  logOut,
  user,
  loading,
  updateUserProfile,
   profile, setProfile
 };
 return <AuthContext.Provider value={allValues}>
  {children}
 </AuthContext.Provider>;
};

export default FirebaseProvider;
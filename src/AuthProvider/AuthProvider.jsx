// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import app from './../firebase/firebase.config';

export const UseContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

  const [userData, setUserData] = useState(null)

  //register
  const register = (name, password) => {
    return createUserWithEmailAndPassword(auth, name, password)
  }

  //login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  //userDetails
  const userDetails = (auth,name, photo) => {
    return updateProfile(auth, {
      displayName : name, photoURL : photo
    })
  }

  //google
  const google = () => {
    return signInWithPopup(auth, googleProvider)
  }

  //github
  const github = () => {
    return signInWithPopup(auth, githubProvider)
  }

  //logOut
  const logOut = () => {
    signOut(auth)
  }


  //userData
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUserData(currentUser)
    })
    return () => {
      return unsubscribed()
    }
  }, [])

  //userinfo
  const userInfo = {register, login, userData, logOut, userDetails, google, github}

  return (
    <UseContext.Provider value={userInfo}>
      {children}
    </UseContext.Provider>
  );
};

export default AuthProvider;
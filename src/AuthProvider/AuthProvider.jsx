// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from './../firebase/firebase.config';

export const UseContext = createContext(null);
const auth = getAuth(app);

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
  const userInfo = {register, login, userData, logOut, userDetails}

  return (
    <UseContext.Provider value={userInfo}>
      {children}
    </UseContext.Provider>
  );
};

export default AuthProvider;
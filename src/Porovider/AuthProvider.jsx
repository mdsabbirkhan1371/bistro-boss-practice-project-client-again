import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // create user with email and password

  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign in with email and password
  const signIn = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // signOut
  const logOut = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // user exist or no check
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log({ currentUser });
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, []);
  const authInfo = {
    user,
    setUser,
    isLoading,
    setIsLoading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

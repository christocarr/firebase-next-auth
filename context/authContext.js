import React, { useContext, useEffect, useState } from 'react';
import { appAuth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = appAuth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  function register(email, password) {
    return appAuth.createUserWithEmailAndPassword(email, password);
  }

  function loginUser(email, password) {
    return appAuth.signInWithEmailAndPassword(email, password);
  }

  function signOutUser() {
    return appAuth.signOut();
  }

  function passwordReset(email) {
    return appAuth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  const value = {
    currentUser,
    register,
    loginUser,
    signOutUser,
    passwordReset,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

import React, { useContext, useEffect, useState } from 'react';
import { appAuth } from '../firebase';

// const AuthContext = React.createContext();
// const modalContext = React.createContext()

const AppContext = React.createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function modalContext() {
//   return useContext(modalContext)
// }

export function Context() {
  return useContext(AppContext);
}

export function Provider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const unsubscribe = appAuth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  function handleShowModal() {
    setShowModal(!showModal);
  }

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
    handleShowModal,
    currentUser,
    register,
    loginUser,
    signOutUser,
    passwordReset,
    updateEmail,
    updatePassword,
  };

  return (
    <AppContext.Provider value={value}>
      {!loading && children}
    </AppContext.Provider>
  );
}

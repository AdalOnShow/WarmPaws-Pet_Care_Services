import React, { useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { auth } from '../Firebase/firebase'
import { AuthContext } from './AuthContext'

const AuthProvaider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const googleProvider = new GoogleAuthProvider()

  const registerWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInWithEmailAndPasswordFunc = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const sigInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }

  const updateProfileFunc = (name, photo) => {
    return updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
  }

  const logOutFunc = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser)
    })

    return () => {
      unsubscribe()
    }
  }, [])


  const authInfo = {
    user,
    setUser,
    registerWithEmailAndPassword,
    updateProfileFunc,
    signInWithEmailAndPasswordFunc,
    sigInWithGoogle,
    logOutFunc,
  }

  return <AuthContext value={authInfo}>{children}</AuthContext>
}

export default AuthProvaider
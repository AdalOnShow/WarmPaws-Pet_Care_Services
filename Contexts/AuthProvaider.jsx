import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../Firebase/firebase'
import { AuthContext } from './AuthContext'

const AuthProvaider = ({ children }) => {
  const [user, setUser] = useState(null)
  console.log(user)

  const registerWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const updateProfileFunc = (name, photo) => {
    return updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
  }

  const authInfo = {
    user,
    setUser,
    registerWithEmailAndPassword,
    updateProfileFunc
  }

  return <AuthContext value={authInfo}>{children}</AuthContext>
}

export default AuthProvaider
import React, { useState } from 'react'
import { AuthContext } from './AuthContext'

const AuthProvaider = ({ children }) => {
  const [user, setUser] = useState(null)


  const authInfo = {
    user,
    setUser
  }

  return <AuthContext value={authInfo}>{children}</AuthContext>
}

export default AuthProvaider
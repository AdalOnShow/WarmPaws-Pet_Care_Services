import React, { useContext } from 'react'
import { AuthContext } from '../Contexts/AuthContext'
import { Navigate, useLocation } from 'react-router'


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()

  if (loading) return null
  if (user) return children
  return <Navigate to="/login" state={{ from: location }} replace />
}

export default PrivateRoute
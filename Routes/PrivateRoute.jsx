import React, { useContext } from 'react'
import { AuthContext } from '../Contexts/AuthContext'
import { Navigate, useLocation } from 'react-router'
import HydrateFallbackElement from '../Components/hydrateFallbackElement'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  if (loading) return <HydrateFallbackElement />

  if (user) return children

  return <Navigate to="/login" state={{ from: location }} replace />
}

export default PrivateRoute

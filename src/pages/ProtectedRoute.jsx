import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { notify } from '../utils/helper'
import Cookies from 'js-cookie'

const ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null)
  const navigate = useNavigate()
  useEffect(() => {
    const token = Cookies.get('token')
    if (token) {
      setIsAuthenticated(true)
    } else {
      notify('error', 'At first you must login or register')
      navigate('/login')
    }
  }, [navigate])
  if (isAuthenticated === null) return null
  return (
    <>
      <Outlet />
    </>
  )
}

export default ProtectedRoute

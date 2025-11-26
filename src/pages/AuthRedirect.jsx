// AuthRedirect.jsx
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'
import { notify } from '../utils/helper'

const AuthRedirect = ({ children }) => {
  const token = Cookies.get('token')

  if (token) {
    notify('error', 'You are already logged in.')
    return <Navigate to="/" replace />
  }

  return children
}

export default AuthRedirect

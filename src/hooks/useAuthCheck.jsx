import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { resetUser } from '../features/auth/authSlice'
import Cookies from 'js-cookie'

const useAuthCheck = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const token = Cookies.get('token')
    if (!token) {
      localStorage.removeItem('user')
      dispatch(resetUser())
    }
  }, [dispatch])
}

export default useAuthCheck

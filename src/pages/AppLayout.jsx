import { Outlet, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUserFetch } from '../features/auth/authSlice'
import Loader from '../ui/Loader'
import Navbar from '../ui/Navbar'
import Logo from '../ui/Logo'
import NavbarLinks from '../ui/NavbarLinks'
import useAuthCheck from '../hooks/useAuthCheck'

const AppLayout = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { isFetched } = useSelector((state) => state.user)
  const isLoading = false

  const routesWithoutNav = ['/login', '/register', '/cart']
  const shouldHideNavbar =
    routesWithoutNav.includes(location.pathname) ||
    location.pathname.startsWith('/product/')

  useAuthCheck()
  useEffect(() => {
    if (!isFetched)
      dispatch(getUserFetch(JSON.parse(localStorage.getItem('user'))?.id))
  }, [dispatch, isFetched])

  if (isLoading) return <Loader />
  return (
    <div className="h-full w-full">
      {!shouldHideNavbar && (
        <Navbar>
          <Logo />
          <NavbarLinks />
        </Navbar>
      )}
      <Outlet />
    </div>
  )
}

export default AppLayout

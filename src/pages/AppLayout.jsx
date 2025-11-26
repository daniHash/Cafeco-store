import { Outlet, useLocation } from 'react-router-dom'
import Loader from '../ui/Loader'
import Navbar from '../ui/Navbar'
import Logo from '../ui/Logo'
import NavbarLinks from '../ui/NavbarLinks'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { loadUserFromStorage } from '../features/auth/authSlice'
const AppLayout = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const isLoading = false

  const routesWithoutNav = ['/login', '/register', '/cart']
  const shouldHideNavbar =
    routesWithoutNav.includes(location.pathname) ||
    location.pathname.startsWith('/product/')

  useEffect(() => {
    dispatch(loadUserFromStorage())
  })

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

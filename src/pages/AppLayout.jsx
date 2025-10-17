import { Outlet, useLocation } from 'react-router-dom'
import Loader from '../ui/Loader'
import Navbar from '../ui/Navbar'
import Logo from '../ui/Logo'
import NavbarLinks from '../ui/NavbarLinks'
const AppLayout = () => {
  const location = useLocation()
  const isLoading = false
  if (isLoading) return <Loader />
  const routesWithoutNav = ['/login', '/register', '/cart']
  const shouldHideNavbar =
    routesWithoutNav.includes(location.pathname) ||
    location.pathname.startsWith('/product/')
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

import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '../pages/AppLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Cart from '../pages/Cart'
import Profile from '../pages/Profile'
import Productpage from '../pages/Productpage'
import Products from '../pages/Products'
import PageNotFound from '../pages/PageNotFound'
import ProtectedRoute from '../pages/ProtectedRoute'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/product/:id',
        element: <Productpage />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: '/cart',
            element: <Cart />,
          },
          {
            path: '/profile',
            element: <Profile />,
          },
          {
            path: '/scores',
            element: <h1 className="text-white">Scores</h1>,
          },
          {
            path: '/addresses',
            element: <h1 className="text-white">Addresses</h1>,
          },
          {
            path: '/orders',
            element: <h1 className="text-white">Orders</h1>,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
])

export default router

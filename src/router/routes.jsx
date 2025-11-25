import { createBrowserRouter, Navigate } from 'react-router-dom'
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
import Information from '../pages/Information'
import Scores from '../pages/Scores'
import Addresses from '../pages/Addresses'

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
            children: [
              {
                index: true,
                element: <Navigate to="information" replace />,
              },
              {
                path: 'information',
                element: <Information />,
              },
              {
                path: 'scores',
                element: <Scores />,
              },
              {
                path: 'addresses',
                element: <Addresses />,
              },
              {
                path: 'orders',
                element: <h1 className="text-white">Orders</h1>,
              },
            ],
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

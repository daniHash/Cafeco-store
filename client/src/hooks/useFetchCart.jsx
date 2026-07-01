import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart } from '../features/cart/cartSlice'
import Cookies from 'js-cookie'

const useFetchCart = () => {
  const token = Cookies.get('token')
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.cart)

  useEffect(() => {
    if (token) {
      if (!cart.length) dispatch(fetchCart())
    }
  }, [token, dispatch, cart])
}

export default useFetchCart

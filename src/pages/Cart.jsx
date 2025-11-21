import { useDispatch, useSelector } from 'react-redux'
import CartNav from '../ui/CartNav'
import CartItems from '../ui/CartItems'
import CheckOutSection from '../ui/CheckOutSection'
import Loader from '../ui/Loader'
import { useEffect } from 'react'
import { fetchCart } from '../features/cart/cartSlice'
const Cart = () => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.cart)

  useEffect(() => {
    dispatch(fetchCart())
  }, [dispatch])

  if (isLoading) return <Loader />
  return (
    <div className="flex flex-col px-5 pt-5 sm:px-10 md:px-20 md:pt-16 lg:px-[140px] lg:pt-16">
      <CartNav />
      <CartItems />
      <CheckOutSection />
    </div>
  )
}

export default Cart

import { useDispatch, useSelector } from 'react-redux'
import CartNav from '../ui/CartNav'
import CartItems from '../features/cart/CartItems'
import CheckOutSection from '../features/cart/CheckOutSection'
import Loader from '../ui/Loader'
import { useEffect } from 'react'
import { fetchCart } from '../features/cart/cartSlice'
const Cart = () => {
  const dispatch = useDispatch()
  const { isLoading, cart } = useSelector((state) => state.cart)

  useEffect(() => {
    dispatch(fetchCart())
  }, [dispatch])

  if (isLoading) return <Loader />
  return (
    <div className="flex flex-col px-5 pt-5 sm:px-10 md:px-20 md:pt-16 lg:px-[140px] lg:pt-16">
      <CartNav />
      {cart.length > 0 ? (
        <>
          <CartItems />
          <CheckOutSection />
        </>
      ) : (
        <h2 className="mt-20 text-center font-titr text-2xl text-dark-500">
          Your cart is empty
        </h2>
      )}
    </div>
  )
}

export default Cart

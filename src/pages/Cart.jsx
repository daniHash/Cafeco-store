import CartNav from '../ui/CartNav'
import CartItems from '../ui/CartItems'
import CheckOutSection from '../ui/CheckOutSection'

const Cart = () => {
  return (
    <div className="flex flex-col px-5 pt-5 sm:px-10 md:px-20 md:pt-16 lg:px-[140px] lg:pt-16">
      <CartNav />
      <CartItems />
      <CheckOutSection />
    </div>
  )
}

export default Cart

import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const CartItems = () => {
  const { cart } = useSelector((state) => state.cart)
  return (
    <div className="mt-20 h-auto w-full overflow-hidden rounded-xl bg-[#D5B690]/65 shadow-form shadow-black/20">
      <ul className="flex h-full w-full flex-col items-center justify-center divide-y-2 divide-dark-500">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  )
}

export default CartItems

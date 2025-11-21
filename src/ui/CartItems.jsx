import CartItem from './CartItem'

const CartItems = () => {
  return (
    <div className="mt-20 h-auto w-full overflow-hidden rounded-xl bg-[#D5B690]/65 shadow-form shadow-black/20">
      <ul className="flex h-full w-full flex-col items-center justify-center divide-y-2 divide-dark-500">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </ul>
    </div>
  )
}

export default CartItems

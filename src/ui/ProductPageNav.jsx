import { FaBasketShopping, FaPersonWalkingArrowLoopLeft } from 'react-icons/fa6'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ProductPageNav = () => {
  const navigate = useNavigate()
  const { cart } = useSelector((state) => state.cart)

  return (
    <div className="flex w-full items-center justify-between">
      <FaPersonWalkingArrowLoopLeft
        onClick={() => navigate(-1)}
        size={30}
        className="cursor-pointer text-dark-500"
      />
      <span className="flex items-center justify-center gap-3">
        <FaBasketShopping
          size={30}
          className="cursor-pointer text-dark-500"
          onClick={() => navigate('/cart')}
        />
        {cart.length > 0 && (
          <span className="rounded-full bg-dark-500 px-2 py-0 text-white">
            {cart.length}
          </span>
        )}
      </span>
    </div>
  )
}

export default ProductPageNav

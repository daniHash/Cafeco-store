import { FaBasketShopping, FaPersonWalkingArrowLoopLeft } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const ProductPageNav = () => {
  const navigate = useNavigate()

  return (
    <div className="flex w-full items-center justify-between">
      <FaPersonWalkingArrowLoopLeft
        onClick={() => navigate(-1)}
        size={30}
        className="cursor-pointer text-dark-500"
      />
      <span className="flex items-center justify-center gap-3">
        <FaBasketShopping size={30} className="cursor-pointer text-dark-500" />
      </span>
    </div>
  )
}

export default ProductPageNav

import { FaLongArrowAltLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Button from './Button'

const CartNav = () => {
  const navigate = useNavigate()
  return (
    <div className="flex w-full items-center justify-between">
      <h1 className="text font-titr text-xl text-dark-500 lg:text-4xl">
        My Cart
      </h1>
      <Button
        onClick={() => navigate(-1)}
        classType="outlinesecondary"
        type="button"
        px={20}
      >
        <FaLongArrowAltLeft className="mr-2 md:mr-4 lg:mr-10" size={30} />
        <span className="font-btn text-lg font-bold text-dark-500 md:text-xl lg:text-2xl">
          Back
        </span>
      </Button>
    </div>
  )
}

export default CartNav

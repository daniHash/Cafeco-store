import { BiMinus, BiPlus } from 'react-icons/bi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Button from './Button'

const CartItem = () => {
  return (
    <li className="flex w-full items-center justify-center gap-20 py-10">
      <img
        src="/images/coffeemilk.png"
        className="h-32 w-2/12"
        alt=""
        srcset=""
      />
      <h3 className="text-center font-titr text-sm text-dark-500 lg:text-[24px]">
        Coffee Milk
      </h3>
      <h3 className="text-center font-titr text-sm text-dark-500 lg:text-[24px]">
        10$
      </h3>
      <div className="flex items-center justify-center gap-8">
        <Button classType="plusmin" px={20}>
          <BiMinus size={18} className="mt-2 mb-2" />
        </Button>
        <h3 className="text-center font-titr text-sm text-dark-500 lg:text-[24px]">
          1
        </h3>
        <Button classType="plusmin" px={20}>
          <BiPlus size={18} className="mt-2 mb-2" />
        </Button>
      </div>
      <h3 className="text-center font-titr text-sm text-dark-500 lg:text-[24px]">
        10$
      </h3>
      <Button classType="delete" px={20}>
        <RiDeleteBin6Line size={20} className="mt-2 mb-2" />
      </Button>
    </li>
  )
}

export default CartItem

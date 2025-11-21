// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Button from './Button'
import { formatCurrency } from '../utils/helper'

const CartItem = ({ item }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      whileHover={{ scale: 1.01, boxShadow: '0px 4px 20px rgba(0,0,0,0.12)' }}
      className="flex w-full items-center justify-between px-7 py-10"
    >
      <img src="/images/coffeemilk.png" className="h-32 w-2/12" alt="" />
      <h3 className="text-center font-titr text-sm text-dark-500 lg:text-[24px]">
        {item.title}
      </h3>
      <h3 className="text-center font-titr text-sm text-dark-500 lg:text-[24px]">
        {formatCurrency(item.price)}$
      </h3>
      <div className="flex items-center justify-center gap-8">
        <Button classType="plusmin" px={20}>
          <BiMinus size={18} className="mt-2 mb-2" />
        </Button>
        <h3 className="text-center font-titr text-sm text-dark-500 lg:text-[24px]">
          {item.quantity}
        </h3>
        <Button classType="plusmin" px={20}>
          <BiPlus size={18} className="mt-2 mb-2" />
        </Button>
      </div>
      <h3 className="text-center font-titr text-sm text-dark-500 lg:text-[24px]">
        {formatCurrency(item.price)}$
      </h3>
      <Button classType="delete" px={20}>
        <RiDeleteBin6Line size={20} className="mt-2 mb-2" />
      </Button>
    </motion.li>
  )
}

export default CartItem

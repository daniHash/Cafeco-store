// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { formatCurrency } from '../../utils/helper'
import { removeItem, removeItemAsync } from './cartSlice'
import useCartItem from '../../hooks/useCartItem'
import Button from '../../ui/Button'

const CartItem = ({ item }) => {
  const [isRemoving, setIsRemoving] = useState(false)
  const dispatch = useDispatch()
  const { increase, decrease } = useCartItem(item)

  const handleDeleteItem = (id) => {
    setIsRemoving(true)
    setTimeout(() => {
      dispatch(removeItem(id))
      dispatch(removeItemAsync(id))
    }, 350)
  }
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, ease: 'easeOut' }}
      whileHover={{ scale: 1.01, boxShadow: '0px 4px 20px rgba(0,0,0,0.12)' }}
      className={`flex w-full items-center justify-between px-1 py-10 transition-all duration-300 ease-in-out sm:px-2 md:px-7 lg:px-7 ${isRemoving ? '-translate-x-10/12 opacity-0' : 'translate-x-0 opacity-100'}`}
    >
      <img
        src="/images/coffeemilk.png"
        className="hidden h-32 w-2/12 sm:hidden md:block lg:block"
        alt=""
      />
      <h3 className="text-center font-titr text-sm text-dark-500 lg:text-[24px]">
        {item.title}
      </h3>
      <h3 className="hidden text-center font-titr text-sm text-dark-500 sm:block md:block lg:block lg:text-[24px]">
        {formatCurrency(item.price)}
      </h3>
      <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
        <Button classType="plusmin" px={20} onClick={decrease}>
          <BiMinus size={18} className="mt-2 mb-2" />
        </Button>
        <h3 className="text-center font-titr text-sm text-dark-500 lg:text-[24px]">
          {item.quantity}
        </h3>
        <Button classType="plusmin" px={20} onClick={increase}>
          <BiPlus size={18} className="mt-2 mb-2" />
        </Button>
      </div>
      <h3 className="text-center font-titr text-sm text-dark-500 lg:text-[24px]">
        {formatCurrency(item.totalprice)}
      </h3>
      <Button
        classType="delete"
        px={20}
        onClick={() => handleDeleteItem(item.id)}
      >
        <RiDeleteBin6Line size={20} className="mt-2 mb-2" />
      </Button>
    </motion.li>
  )
}

export default CartItem

import { Link } from 'react-router-dom'
import { BiCartAdd, BiMinus, BiMoney, BiPlus } from 'react-icons/bi'
import { FaStar } from 'react-icons/fa'
import { formatCurrency } from '../utils/helper'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import Button from './Button'
import useCartItem from '../hooks/useCartItem'

const ProductCard = ({ item, scale, blur }) => {
  const { cartItem, add, increase, decrease } = useCartItem(item)
  const words = item.description.split('')
  const showMore = words.length > 40
  const displayedText = showMore
    ? words.slice(0, 40).join('') + '...'
    : item.description
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.2, ease: 'backInOut' }}
      className={`relative flex h-auto w-full transition-all duration-300 ease-in-out md:h-[460px] md:w-[335px] lg:h-[480px] lg:w-[350px] ${scale && 'scale-60'} ${blur && 'blur-md'} w-full flex-col items-center justify-center gap-4 rounded-2xl bg-box-300 px-5 py-4 md:gap-5 lg:gap-5`}
    >
      <Link
        to={`/product/${item.id}`}
        className="flex flex-col items-center justify-center gap-4 md:gap-5 lg:gap-5"
      >
        <img
          src={`${item.image}`}
          alt=""
          className="w-40 cursor-pointer md:block md:w-60 lg:block lg:w-64"
        />
        <h3 className="font-titr text-[16px] text-dark-500 sm:text-[20px] lg:text-[24px]">
          {item.title}
        </h3>
        <div className="hidden gap-0.5 sm:flex sm:gap-1 md:flex md:gap-1.5 lg:flex lg:gap-2">
          <span className="py1.5 rounded-md bg-red-500 px-1">
            {item.category.toUpperCase()}
          </span>
          <span className="py1.5 rounded-md bg-blue-500 px-1">
            {item.subcategory.toUpperCase()}
          </span>
        </div>
        <p className="text-center font-text text-[16px] text-dark-500 sm:block sm:text-[18px] lg:block lg:text-[15px]">
          {displayedText}
          {showMore && (
            <Link to={`/product/${item.id}`} className="text-sky-700">
              more
            </Link>
          )}
        </p>
        <div className="flex w-full items-center justify-evenly">
          <span className="flex items-center justify-center gap-1 font-titr text-sm font-bold text-dark-500 sm:gap-2 lg:gap-3">
            {formatCurrency(item.price)}
          </span>
          <span className="flex items-center justify-center gap-1 font-titr text-sm font-bold text-dark-500">
            <FaStar className="size-4 md:size-4 lg:size-4" />
            {item.rating}
          </span>
        </div>
      </Link>

      {cartItem ? (
        <div className="z-50 flex items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          <Button classType="plusmin" px={20} onClick={decrease}>
            <BiMinus size={18} className="mt-2 mb-2" />
          </Button>
          <h3 className="text-center font-titr text-sm text-dark-500 lg:text-[24px]">
            {cartItem.quantity}
          </h3>
          <Button classType="plusmin" px={20} onClick={increase}>
            <BiPlus size={18} className="mt-2 mb-2" />
          </Button>
        </div>
      ) : (
        <Button type="button" classType="primary" onClick={add}>
          <BiCartAdd size={30} /> Add to cart
        </Button>
      )}
    </motion.div>
  )
}

export default ProductCard

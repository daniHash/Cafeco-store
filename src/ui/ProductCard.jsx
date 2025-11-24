import { Link } from 'react-router-dom'
import { BiCartAdd, BiMinus, BiMoney, BiPlus } from 'react-icons/bi'
import { FaStar } from 'react-icons/fa'
import { formatCurrency } from '../utils/helper'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import {
  addItem,
  addItemAsync,
  decreaseAsync,
  decreaseItemQuantity,
  increaseAsync,
  increaseItemQuantity,
} from '../features/cart/cartSlice'
import Button from './Button'

const ProductCard = ({ item, scale, blur }) => {
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.cart)

  const isSelected = cart.find((p) => p.id === item.id)
  const words = item.description.split(' ')
  const showMore = words.length > 5
  const displayedText = showMore
    ? words.slice(0, 5).join(' ') + '...'
    : item.description

  const handleAddItem = () => {
    const newItem = {
      id: item.id,
      image: item.image,
      price: item.price,
      quantity: 1,
      title: item.title,
      totalprice: item.price,
    }
    dispatch(addItem(newItem))
    dispatch(addItemAsync(newItem))
  }
  const handleIncItem = (id) => {
    dispatch(increaseItemQuantity(id))
    dispatch(increaseAsync(id))
  }
  const handleDecItem = (id) => {
    dispatch(decreaseItemQuantity(id))
    dispatch(decreaseAsync(id))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.2, ease: 'backInOut' }}
      className={`relative flex h-[200px] transition-all duration-300 ease-in-out sm:h-[450px] sm:w-[300px] md:h-[460px] md:w-[335px] lg:h-[480px] lg:w-[350px] ${scale && 'scale-60'} ${blur && 'blur-md'} w-full flex-col items-center justify-center gap-2 rounded-2xl bg-box-300 px-5 md:gap-5 lg:gap-5`}
    >
      <Link to={`/product/${item.id}`}>
        <img
          src={`${item.image}`}
          alt=""
          className="hidden cursor-pointer md:block lg:block"
        />
      </Link>
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
          <BiMoney size={30} />
          {formatCurrency(item.price)}
        </span>
        <span className="hidden items-center justify-center gap-1 font-titr text-sm font-bold text-dark-500 sm:flex sm:gap-2 md:flex lg:flex lg:gap-3">
          <FaStar size={30} className="" />
          {item.rating}
        </span>
      </div>
      {isSelected ? (
        <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          <Button
            classType="plusmin"
            px={20}
            onClick={() => handleDecItem(isSelected.id)}
          >
            <BiMinus size={18} className="mt-2 mb-2" />
          </Button>
          <h3 className="text-center font-titr text-sm text-dark-500 lg:text-[24px]">
            {isSelected.quantity}
          </h3>
          <Button
            classType="plusmin"
            px={20}
            onClick={() => handleIncItem(isSelected.id)}
          >
            <BiPlus size={18} className="mt-2 mb-2" />
          </Button>
        </div>
      ) : (
        <Button type="button" classType="primary" onClick={handleAddItem}>
          <BiCartAdd size={30} /> Add to cart
        </Button>
      )}
    </motion.div>
  )
}

export default ProductCard

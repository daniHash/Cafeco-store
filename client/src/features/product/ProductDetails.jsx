import { BiCartAdd, BiMinus, BiPlus } from 'react-icons/bi'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import Button from '../../ui/Button'
import Error from '../../ui/Error'
import Cookies from 'js-cookie'
import useCartItem from '../../hooks/useCartItem'
import { useSelector } from 'react-redux'
import Loader from '../../ui/Loader'
import useFetchCart from '../../hooks/useFetchCart'

const ProductDetails = ({ isSelected }) => {
  useFetchCart()
  const { productDetails, error } = useSelector((state) => state.products)
  const { add, increase, decrease, isAdding, isDecreasing, isIncreasing } =
    useCartItem(productDetails)

  if (!productDetails) return <Loader />
  if (error) return <Error>{error}</Error>
  if (!productDetails)
    return (
      <p className="mt-16 text-center font-text text-xl font-bold text-dark-500">
        No top rated products found
      </p>
    )
  return (
    <div className="mt-20 flex h-8/12 w-full flex-col items-center justify-center gap-10 md:mt-10 md:flex-col lg:mt-10 lg:flex-row">
      <motion.img
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        src={productDetails.image}
        alt="image of product"
        className="h-4/12 w-1/2 rounded-2xl shadow-black drop-shadow-[0_60px_75px_rgba(0,0,0,0.3)]"
      />
      <div className="flex flex-col items-center justify-center gap-10">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 15,
            delay: 0.3,
          }}
          className="text-center font-titr text-4xl text-dark-500"
        >
          {productDetails.title}
        </motion.h2>
        <motion.p
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mg:w-[620px] w-full text-center font-text text-sm font-medium text-dark-500 md:text-lg lg:w-[620px] lg:text-xl"
        >
          {productDetails.description}
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="hidden gap-0.5 sm:flex sm:gap-1 md:flex md:gap-1.5 lg:flex lg:gap-2"
        >
          <span className="py1.5 rounded-md bg-primary-300 px-1 text-primary-100 capitalize">
            {productDetails.category}
          </span>
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex w-full flex-col items-center justify-evenly gap-5 md:flex-row md:gap-32 lg:flex-row lg:gap-32"
        >
          <h3 className="font-titr text-lg text-dark-500 lg:text-[28px]">
            Price: {productDetails.price}$
          </h3>
          <h3 className="flex items-center text-center font-titr text-lg text-dark-500 lg:text-[28px]">
            Rating: {productDetails.rating}
            <span className="mt-4 ml-1 font-titr text-xs text-dark-500 lg:text-[12px]">
              out of 5
            </span>
          </h3>
        </motion.div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 15,
            delay: 1.2,
          }}
          className="w-full px-6"
        >
          {isSelected ? (
            <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
              <Button
                loading={isIncreasing || isDecreasing}
                classType="plusmin"
                px={20}
                onClick={decrease}
              >
                <BiMinus size={18} className="mt-2 mb-2" />
              </Button>
              <h3 className="text-center font-titr text-sm text-dark-500 lg:text-[24px]">
                {isSelected.quantity}
              </h3>
              <Button
                loading={isIncreasing || isDecreasing}
                classType="plusmin"
                px={20}
                onClick={increase}
              >
                <BiPlus size={18} className="mt-2 mb-2" />
              </Button>
            </div>
          ) : (
            <Button
              loading={isAdding}
              type="button"
              classType="primary"
              onClick={add}
            >
              <BiCartAdd size={30} /> {isAdding ? 'Adding...' : 'Add to cart'}
            </Button>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default ProductDetails

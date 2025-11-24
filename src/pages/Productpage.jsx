import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchProductById } from '../features/product/productSlice'
import StarSection from '../ui/StarSection'
import ProductDetails from '../features/product/ProductDetails'
import ProductPageNav from '../ui/ProductPageNav'
import Loader from '../ui/Loader'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const Productpage = () => {
  const dispatch = useDispatch()
  const { isLoading, productDetails } = useSelector((state) => state.products)
  const { cart } = useSelector((state) => state.cart)
  const { id } = useParams()
  const isSelected = cart.find((p) => p.id === id)

  useEffect(() => {
    if (!productDetails || productDetails.id !== id) {
      dispatch(fetchProductById(id))
    }
  }, [productDetails, dispatch, id])

  if (isLoading) return <Loader />
  return (
    <div className="flex h-screen flex-col px-5 pt-5 sm:px-10 md:px-20 md:pt-16 lg:px-[140px] lg:pt-16">
      <ProductPageNav />
      <ProductDetails isSelected={isSelected} />
      <StarSection />
    </div>
  )
}

export default Productpage

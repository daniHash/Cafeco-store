import StarSection from '../ui/StarSection'
import ProductPageNav from '../ui/ProductPageNav'
import ProductDetails from '../features/product/ProductDetails'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchProductById } from '../features/product/productSlice'
import Loader from '../ui/Loader'

const Productpage = () => {
  const { isLoading, productDetails } = useSelector((state) => state.products)

  const dispatch = useDispatch()
  const { id } = useParams()
  useEffect(() => {
    if (!productDetails || productDetails.id !== id) {
      dispatch(fetchProductById(id))
    }
  }, [productDetails, dispatch, id])

  if (isLoading) return <Loader />
  return (
    <div className="flex h-screen flex-col px-5 pt-5 sm:px-10 md:px-20 md:pt-16 lg:px-[140px] lg:pt-16">
      <ProductPageNav />
      <ProductDetails />
      <StarSection />
    </div>
  )
}

export default Productpage

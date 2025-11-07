import StarSection from '../ui/StarSection'
import ProductPageNav from '../ui/ProductPageNav'
import ProductDetails from '../ui/ProductDetails'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchProductById } from '../features/product/productSlice'
import Loader from '../ui/Loader'

const Productpage = () => {
  const { isLoading } = useSelector((state) => state.products)

  const dispatch = useDispatch()
  const { id } = useParams()
  useEffect(() => {
    dispatch(fetchProductById(id))
  }, [dispatch, id])

  if (isLoading) return <Loader />
  return (
    <div className="flex h-screen flex-col pt-16 sm:px-10 md:px-20 lg:px-[140px]">
      <ProductPageNav />
      <ProductDetails />
      <StarSection />
    </div>
  )
}

export default Productpage

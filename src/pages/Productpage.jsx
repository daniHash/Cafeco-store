import StarSection from '../ui/StarSection'
import ProductPageNav from '../ui/ProductPageNav'
import ProductDetails from '../ui/ProductDetails'

const Productpage = () => {
  return (
    <div className="flex h-screen flex-col pt-16 sm:px-10 md:px-20 lg:px-[140px]">
      <ProductPageNav />
      <ProductDetails />
      <StarSection />
    </div>
  )
}

export default Productpage

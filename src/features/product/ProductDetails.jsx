import { BiCartAdd } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import Button from '../../ui/Button'
import Error from '../../ui/Error'
const ProductDetails = () => {
  const { productDetails, error } = useSelector((state) => state.products)

  if (error) return <Error>{error}</Error>
  if (!productDetails)
    return (
      <p className="mt-16 text-center font-text text-xl font-bold text-dark-500">
        No top rated products found
      </p>
    )
  return (
    <div className="mt-20 flex h-8/12 w-full flex-col items-center justify-center gap-10 md:mt-10 md:flex-col lg:mt-10 lg:flex-row">
      <img
        src={productDetails.image}
        alt="image of product"
        className="h-full w-1/2 shadow-black drop-shadow-[0_60px_75px_rgba(0,0,0,0.3)]"
      />
      <div className="flex flex-col items-center justify-center gap-10">
        <h2 className="text-center font-titr text-4xl text-dark-500">
          {productDetails.title}
        </h2>
        <p className="mg:w-[620px] w-full text-center font-text text-sm font-medium text-dark-500 md:text-lg lg:w-[620px] lg:text-xl">
          {productDetails.description}
        </p>
        <div className="hidden gap-0.5 sm:flex sm:gap-1 md:flex md:gap-1.5 lg:flex lg:gap-2">
          <span className="py1.5 rounded-md bg-red-500 px-1">
            {productDetails.category}
          </span>
          <span className="py1.5 rounded-md bg-blue-500 px-1">
            {productDetails.subcategory}
          </span>
        </div>
        <div className="flex w-full flex-col items-center justify-evenly gap-5 md:flex-row md:gap-32 lg:flex-row lg:gap-32">
          <h3 className="font-titr text-lg text-dark-500 lg:text-[28px]">
            Price: {productDetails.price}$
          </h3>
          <h3 className="flex items-center text-center font-titr text-lg text-dark-500 lg:text-[28px]">
            Rating: {productDetails.rating}
            <span className="mt-4 ml-1 font-titr text-xs text-dark-500 lg:text-[12px]">
              out of 5
            </span>
          </h3>
        </div>
        <div className="w-full px-6">
          <Button type="button" classType="primary">
            <BiCartAdd size={30} /> Add to cart
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails

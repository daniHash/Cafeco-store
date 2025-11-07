import { BiCartAdd } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import Button from './Button'
import Error from './Error'
const ProductDetails = () => {
  const { productDetails, error } = useSelector((state) => state.products)

  if (error) return <Error>Try again later</Error>
  return (
    <div className="mt-10 flex h-8/12 w-full items-center justify-center gap-10">
      <img
        src={productDetails.image}
        alt="image of product"
        className="h-full w-1/2 shadow-black drop-shadow-[0_60px_75px_rgba(0,0,0,0.3)]"
      />
      <div className="flex flex-col items-center justify-center gap-10">
        <h2 className="text-center font-titr text-4xl text-dark-500">
          {productDetails.title}
        </h2>
        <p className="w-[620px] text-center font-text text-sm font-medium text-dark-500 md:text-lg lg:text-xl">
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
        <div className="flex w-full items-center justify-evenly gap-32">
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

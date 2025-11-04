import { BiCartAdd } from 'react-icons/bi'
import Button from './Button'

const ProductDetails = () => {
  return (
    <div className="mt-10 flex h-8/12 w-full items-center justify-center gap-10">
      <img
        src="/images/coffeemilk.png"
        alt="Glass of iced coffee with milk being poured and swirling into dark espresso, creating layered light and dark tones; sits on a wooden table in a bright cafe interior with soft natural light and blurred chairs and plants in the background; no visible text; overall cozy and inviting atmosphere"
        srcset=""
        className="h-full w-1/2 shadow-black drop-shadow-[0_60px_75px_rgba(0,0,0,0.3)]"
      />
      <div className="flex flex-col items-center justify-center gap-10">
        <h2 className="text-center font-titr text-4xl text-dark-500">
          Coffee milk
        </h2>
        <p className="w-[620px] text-center font-text text-sm font-medium text-dark-500 md:text-lg lg:text-xl">
          Coffee Milk is a delightful blend of fresh milk and rich coffee,
          creating a smooth and creamy flavor. It’s the perfect choice for those
          who enjoy the energy of coffee with the softness of milk. Whether for
          a busy morning or a relaxing afternoon, Coffee Milk is always a
          comforting option.
        </p>
        <div className="hidden gap-0.5 sm:flex sm:gap-1 md:flex md:gap-1.5 lg:flex lg:gap-2">
          <span className="py1.5 rounded-md bg-red-500 px-1">Drinks</span>
          <span className="py1.5 rounded-md bg-blue-500 px-1">Cold</span>
        </div>
        <div className="flex w-full items-center justify-evenly gap-32">
          <h3 className="font-titr text-lg text-dark-500 lg:text-[28px]">
            Price: 10$
          </h3>
          <h3 className="flex items-center text-center font-titr text-lg text-dark-500 lg:text-[28px]">
            Rating: 4.8
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

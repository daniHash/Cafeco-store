import { Link } from 'react-router-dom'
import { BiCartAdd, BiMoney } from 'react-icons/bi'
import { FaStar } from 'react-icons/fa'
import { formatCurrency } from '../utils/helper'
import Button from './Button'
const ProductCard = ({ item, scale, blur }) => {
  return (
    <div
      className={`relative flex h-[150px] transition-all duration-300 ease-in-out sm:h-[450px] sm:w-[300px] md:h-[460px] md:w-[335px] lg:h-[480px] lg:w-[350px] ${scale && 'scale-60'} ${blur && 'blur-md'} w-full flex-col items-center justify-center gap-2 rounded-2xl bg-box-300 px-5 md:gap-5 lg:gap-5`}
    >
      <img src={`${item.image}`} alt="" className="hidden md:block lg:block" />
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
      <p className="hidden text-center font-text text-[16px] text-dark-500 sm:block sm:text-[18px] lg:block lg:text-[15px]">
        {item.description}
        <Link to="/product/:id" className="text-sky-700">
          more
        </Link>
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
      <Button type="button" classType="primary">
        <BiCartAdd size={30} /> Add to cart
      </Button>
    </div>
  )
}

export default ProductCard

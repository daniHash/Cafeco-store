import { FaLongArrowAltLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Button from '../ui/Button'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { FiDelete } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'

const Cart = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col px-5 pt-5 sm:px-10 md:px-20 md:pt-16 lg:px-[140px] lg:pt-16">
      <div className="flex w-full items-center justify-between">
        <h1 className="text font-titr text-xl text-dark-500 lg:text-4xl">
          My Cart
        </h1>
        <Button
          onClick={() => navigate(-1)}
          classType="outlinesecondary"
          type="button"
          px={20}
        >
          <FaLongArrowAltLeft className="mr-10" size={30} />
          <span className="font-btn text-2xl font-bold text-dark-500">
            Back
          </span>
        </Button>
      </div>
      <div className="mt-20 h-auto max-h-[1500px] w-full overflow-auto rounded-xl bg-[#D5B690]/65 shadow-form shadow-black/20">
        <ul className="flex h-full w-full flex-col items-center justify-center divide-y-2 divide-dark-500">
          <li className="flex w-full items-center justify-center gap-20 py-10">
            <img
              src="/images/coffeemilk.png"
              className="h-32 w-2/12"
              alt=""
              srcset=""
            />
            <h3 className="text-center font-titr text-sm text-dark-500 lg:text-[24px]">
              Coffee Milk
            </h3>
            <h3 className="text-center font-titr text-sm text-dark-500 lg:text-[24px]">
              10$
            </h3>
            <div className="flex items-center justify-center gap-8">
              <Button classType="plusmin" px={20}>
                <BiMinus size={18} className="mt-2 mb-2" />
              </Button>
              <h3 className="text-center font-titr text-sm text-dark-500 lg:text-[24px]">
                1
              </h3>
              <Button classType="plusmin" px={20}>
                <BiPlus size={18} className="mt-2 mb-2" />
              </Button>
            </div>
            <h3 className="text-center font-titr text-sm text-dark-500 lg:text-[24px]">
              10$
            </h3>
            <Button classType="delete" px={20}>
              <RiDeleteBin6Line size={20} className="mt-2 mb-2" />
            </Button>
          </li>
          <li className="flex w-full items-center justify-center gap-20 py-10">
            <img
              src="/images/coffeemilk.png"
              className="h-32 w-2/12"
              alt=""
              srcset=""
            />
            <h3 className="text-center font-titr text-sm text-dark-500 lg:text-[24px]">
              Coffee Milk
            </h3>
            <h3 className="text-center font-titr text-sm text-dark-500 lg:text-[24px]">
              10$
            </h3>
            <div className="flex items-center justify-center gap-8">
              <Button classType="plusmin" px={20}>
                <BiMinus size={18} className="mt-2 mb-2" />
              </Button>
              <h3 className="text-center font-titr text-sm text-dark-500 lg:text-[24px]">
                1
              </h3>
              <Button classType="plusmin" px={20}>
                <BiPlus size={18} className="mt-2 mb-2" />
              </Button>
            </div>
            <h3 className="text-center font-titr text-sm text-dark-500 lg:text-[24px]">
              10$
            </h3>
            <Button classType="delete" px={20}>
              <RiDeleteBin6Line size={20} className="mt-2 mb-2" />
            </Button>
          </li>
        </ul>
      </div>
      <div className="mt-20 mb-20 h-auto w-full rounded-xl bg-[#D5B690]/65 shadow-form shadow-black/20">
        <div className="mt-20 flex w-full items-center justify-center gap-72">
          <div className="">
            <h2 className="text-center font-titr text-4xl text-dark-500">
              Shipping
            </h2>
            <h3 className="mt-10 text-center font-titr text-lg text-dark-500 lg:text-[28px]">
              Free
            </h3>
          </div>
          <div className="">
            <h2 className="text-center font-titr text-4xl text-dark-500">
              Sub total
            </h2>
            <h3 className="mt-10 text-center font-titr text-lg text-dark-500 lg:text-[28px]">
              300$
            </h3>
          </div>
        </div>
        <div className="">
          <h2 className="mt-16 w-full text-center font-titr text-4xl text-destructive-300">
            Sub total
          </h2>
          <h3 className="mt-10 text-center font-titr text-lg text-destructive-300 lg:text-[28px]">
            300$
          </h3>
        </div>
        <div className="mt-20 flex w-full justify-center">
          <Button classType="primary" px={20}>
            Chekout <span className="ml-20">300$</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Cart

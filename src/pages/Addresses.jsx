import { BiPlus } from 'react-icons/bi'
import Button from '../ui/Button'
import AddressList from '../ui/AddressList'

const Addresses = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="relative mt-14 flex items-center justify-center">
        <h1 className="text text-center font-titr text-xl text-white lg:text-4xl">
          Addresses
        </h1>
        <Button classType="prof" px={20} className="absolute right-0">
          <BiPlus size={18} className="mt-2 mb-2 text-dark-500" />
        </Button>
      </div>
      <AddressList />
    </div>
  )
}

export default Addresses

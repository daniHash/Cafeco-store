import { BiPlus } from 'react-icons/bi'
import Button from '../ui/Button'
import AddressList from '../ui/AddressList'

const Addresses = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="mt-14 flex w-full items-center justify-between px-4">
        <h1 className="text flex-1 text-center font-titr text-xl text-white lg:text-4xl">
          Addresses
        </h1>

        <Button classType="prof" px={20}>
          <BiPlus size={18} className="mt-2 mb-2 text-dark-500" />
        </Button>
      </div>

      <AddressList />
    </div>
  )
}

export default Addresses

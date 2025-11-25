import { MdOutlineModeEdit } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Button from './Button'

const AddressItem = () => {
  return (
    <li className="flex items-center justify-between px-10 py-3.5">
      <p className="font-text text-sm font-bold text-white md:text-lg lg:text-xl">
        PO Box , P.O. Box , 7721 , Greenfield Station , Greenfield , Plains
        99999 , United States
      </p>
      <div className="flex items-center justify-center gap-2">
        <Button classType="edit" px={20}>
          <MdOutlineModeEdit size={20} className="mt-2 mb-2" />
        </Button>
        <Button classType="delete" px={20}>
          <RiDeleteBin6Line size={20} className="mt-2 mb-2" />
        </Button>
      </div>
    </li>
  )
}

export default AddressItem

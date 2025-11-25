// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { MdOutlineModeEdit } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Button from './Button'

const AddressItem = () => {
  return (
    <motion.li
      whileHover={{ scale: 1.02, boxShadow: '0px 5px 15px rgba(0,0,0,0.2)' }}
      className="flex items-center justify-between px-10 py-3.5"
    >
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
    </motion.li>
  )
}

export default AddressItem

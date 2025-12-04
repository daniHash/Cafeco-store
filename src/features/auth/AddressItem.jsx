// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { MdOutlineModeEdit } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Button from '../../ui/Button'
import { useDispatch } from 'react-redux'
import { deleteAddressFetch, deleteAddressFromUser } from './authSlice'
import { notify } from '../../utils/helper'

const AddressItem = ({ addresse, variants, userId }) => {
  const dispatch = useDispatch()
  const handleDeleteAdd = () => {
    dispatch(deleteAddressFetch({ userId, addressId: addresse.id }))
      .unwrap()
      .then(() => {
        dispatch(deleteAddressFromUser(addresse.id))
      })
      .catch((err) => {
        notify('error', err)
      })
  }
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.02, boxShadow: '0px 5px 15px rgba(0,0,0,0.2)' }}
      className="flex flex-col items-center justify-between gap-2 px-10 py-3.5 sm:flex-col md:flex-row lg:flex-row"
    >
      <p className="font-text text-sm font-bold text-white md:text-lg lg:text-xl">
        {addresse.address}
      </p>
      <div className="flex items-center justify-center gap-2">
        <Button classType="edit" px={20}>
          <MdOutlineModeEdit size={20} className="mt-2 mb-2" />
        </Button>
        <Button classType="delete" px={20} onClick={handleDeleteAdd}>
          <RiDeleteBin6Line size={20} className="mt-2 mb-2" />
        </Button>
      </div>
    </motion.li>
  )
}

export default AddressItem

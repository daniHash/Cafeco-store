// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion'
import { MdOutlineModeEdit } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Button from '../../ui/Button'
import { useDispatch } from 'react-redux'
import {
  deleteAddressFetch,
  deleteAddressFromUser,
  editAddressFetch,
  editAddressInUser,
} from './authSlice'
import { notify } from '../../utils/helper'
import { useState } from 'react'

const AddressItem = ({ addresse, variants, userId }) => {
  const dispatch = useDispatch()
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [editedAddress, setEditedAddress] = useState(addresse.address)
  const handleDeleteAdd = () => {
    dispatch(deleteAddressFetch({ userId, addressId: addresse.id }))
      .unwrap()
      .then(() => {
        dispatch(deleteAddressFromUser(addresse.id))
      })
      .catch(() => {
        notify('error', 'Try again later')
      })
  }
  const handleSave = () => {
    dispatch(
      editAddressFetch({
        userId,
        addressId: addresse.id,
        body: { address: editedAddress },
      })
    )
      .unwrap()
      .then(() => {
        dispatch(editAddressInUser({ id: addresse.id, address: editedAddress }))
      })
      .catch(() => {
        notify('error', 'Try again later')
      })
    setIsEditOpen(false)
  }
  return (
    <>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.02, boxShadow: '0px 5px 15px rgba(0,0,0,0.2)' }}
        className="flex w-full cursor-pointer flex-col items-center justify-between gap-2 px-10 py-3.5 sm:flex-col md:flex-row lg:flex-row"
      >
        <p className="font-text text-sm font-bold text-white md:text-lg lg:text-xl">
          {addresse.address}
        </p>
        <div className="flex items-center justify-center gap-2">
          <Button classType="edit" px={20} onClick={() => setIsEditOpen(true)}>
            <MdOutlineModeEdit size={20} className="mt-2 mb-2" />
          </Button>
          <Button classType="delete" px={20} onClick={handleDeleteAdd}>
            <RiDeleteBin6Line size={20} className="mt-2 mb-2" />
          </Button>
        </div>
      </motion.li>

      <AnimatePresence>
        {isEditOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="flex w-11/12 max-w-md flex-col gap-4 rounded-2xl border border-white/20 bg-white/15 p-8 backdrop-blur-lg"
            >
              <h2 className="text-xl font-bold text-white">Edit Address</h2>
              <input
                type="text"
                value={editedAddress}
                onChange={(e) => setEditedAddress(e.target.value)}
                className="rounded-lg border border-white/30 bg-white/20 p-3 text-white placeholder-white/70 outline-none"
                placeholder="Enter new address"
              />
              <div className="mt-2 flex justify-end gap-3">
                <Button classType="delete" onClick={() => setIsEditOpen(false)}>
                  Cancel
                </Button>
                <Button classType="edit" onClick={handleSave}>
                  Update
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default AddressItem

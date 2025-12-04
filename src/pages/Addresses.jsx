import { BiPlus } from 'react-icons/bi'
import Button from '../ui/Button'
import AddressList from '../features/auth/AddressList'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { addAddressFetch, addAddressToUser } from '../features/auth/authSlice'
import { notify } from '../utils/helper'
const Addresses = () => {
  const user = useSelector((state) => state.user.user)
  const dispatch = useDispatch()
  const [addAddress, setAddAddress] = useState('')
  const [isAddOpen, setIsAddOpen] = useState(false)
  const handleAdd = () => {
    dispatch(
      addAddressFetch({
        userId: user.id,
        address: addAddress,
      })
    )
      .unwrap()
      .then(() => {
        dispatch(addAddressToUser({ id: Date.now(), address: addAddress }))
      })
      .catch(() => {
        notify('error', 'Try again later')
      })
    setIsAddOpen(false)
    setAddAddress('')
  }
  return (
    <div className="flex h-full w-full flex-col">
      <div className="mt-14 flex w-full items-center justify-between px-4">
        <h1 className="text flex-1 text-center font-titr text-xl text-white lg:text-4xl">
          Addresses
        </h1>

        <Button classType="prof" px={20} onClick={() => setIsAddOpen(true)}>
          <BiPlus size={18} className="mt-2 mb-2 text-dark-500" />
        </Button>
      </div>

      <AddressList />
      <AnimatePresence>
        {isAddOpen && (
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
              <h2 className="text-xl font-bold text-white">Add Address</h2>
              <input
                type="text"
                className="rounded-lg border border-white/30 bg-white/20 p-3 text-white placeholder-white/70 outline-none"
                placeholder="Enter new address"
                value={addAddress}
                onChange={() => setAddAddress(event.target.value)}
              />
              <div className="mt-2 flex justify-end gap-3">
                <Button classType="delete" onClick={() => setIsAddOpen(false)}>
                  Cancel
                </Button>
                <Button classType="edit" onClick={handleAdd}>
                  Add
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Addresses

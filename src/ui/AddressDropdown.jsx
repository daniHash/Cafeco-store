import { useSelector } from 'react-redux'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { IoChevronDownOutline } from 'react-icons/io5'

const AddressDropdown = ({ onSelect }) => {
  const addresses = useSelector((state) => state.user.user?.addresses || [])
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  const handleSelect = (address) => {
    setSelected(address)
    onSelect?.(address.address)
    setIsOpen(false)
  }

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-white/30 bg-white/20 p-3 text-white backdrop-blur-md"
      >
        <span className="truncate">
          {selected?.address || 'Select your address'}
        </span>
        <IoChevronDownOutline
          size={18}
          className={`transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute z-50 mt-2 max-h-60 w-full divide-y-1 divide-white overflow-auto rounded-lg border border-white/30 bg-white/25 shadow-lg backdrop-blur-lg"
          >
            {addresses.map((item) => (
              <motion.li
                key={item.id}
                onClick={() => handleSelect(item)}
                className="backdrop:blur-4xl h-auto cursor-pointer truncate bg-black/80 p-3 text-sm text-wrap text-white transition-all duration-300 ease-in-out hover:bg-black"
              >
                {item.address}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AddressDropdown

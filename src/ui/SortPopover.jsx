// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const SortPopover = ({ handleSort }) => {
  return (
    <motion.ul
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="relative z-50 flex h-30 w-40 flex-col items-center justify-center divide-y-2 divide-dark-500 overflow-hidden rounded-md bg-[#B59D90]"
    >
      <li
        onClick={handleSort}
        className="w-full cursor-pointer py-2 text-center font-btn font-bold text-dark-500 transition-all duration-200 ease-in-out hover:bg-accent-500"
        value="price"
      >
        Sort by Price
      </li>
      <li
        onClick={handleSort}
        className="w-full cursor-pointer py-2 text-center font-btn font-bold text-dark-500 transition-all duration-200 ease-in-out hover:bg-accent-500"
      >
        Sort by Rating
      </li>
      <li
        onClick={handleSort}
        className="font-bol w-fulld w-full cursor-pointer py-2 text-center font-btn font-bold text-dark-500 transition-all duration-200 ease-in-out hover:bg-accent-500"
      >
        Sort by A-Z
      </li>
    </motion.ul>
  )
}

export default SortPopover

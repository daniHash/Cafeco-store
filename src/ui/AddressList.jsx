// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import AddressItem from './AddressItem'

const AddressList = () => {
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }

  return (
    <motion.ul
      variants={listVariants}
      initial="hidden"
      animate="visible"
      className="mt-8 flex list-none flex-col items-center justify-center gap-3.5 divide-y-2 divide-black overflow-auto overflow-x-hidden"
    >
      {[...Array(4)].map((_, i) => (
        <motion.li key={i} variants={itemVariants}>
          <AddressItem />
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default AddressList

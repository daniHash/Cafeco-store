// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import AddressItem from './AddressItem'

const AddressList = () => {
  const user = useSelector((state) => state.user.user)

  if (!user) return null

  const { addresses } = user

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
  if (addresses.length === 0)
    return (
      <p className="mt-16 w-full text-center font-text text-xl font-bold text-white">
        No Addresses found
      </p>
    )
  return (
    <motion.ul
      variants={listVariants}
      initial="hidden"
      animate="visible"
      className="mt-8 flex list-none flex-col items-center justify-center gap-3.5 divide-y-2 divide-black overflow-auto overflow-x-hidden pt-60 sm:pt-36 md:pt-72 lg:pt-20"
    >
      {addresses.map((ad) => (
        <AddressItem
          key={ad.id}
          addresse={ad.address}
          variants={itemVariants}
        />
      ))}
    </motion.ul>
  )
}

export default AddressList

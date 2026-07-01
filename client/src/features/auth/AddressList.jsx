// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import AddressItem from './AddressItem'

const AddressList = () => {
  const user = useSelector((state) => state.user.user)

  if (!user) return null

  const { addresses, id } = user

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
      <div className="mt-24 flex flex-col items-center justify-center gap-3">
        <span className="text-4xl">📍</span>
        <p className="text-xl font-semibold text-white">No addresses yet</p>
        <p className="text-sm text-white/50">
          Add your first address to get started
        </p>
      </div>
    )

  return (
    <motion.div
      variants={listVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto mt-6 flex w-full max-w-2xl list-none flex-col gap-3 px-4 pt-6 pb-10 sm:mt-10 sm:px-6"
    >
      {addresses.map((ad) => (
        <AddressItem
          key={ad.id}
          userId={id}
          addresse={ad}
          variants={itemVariants}
        />
      ))}
    </motion.div>
  )
}

export default AddressList

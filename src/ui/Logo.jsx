// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <motion.div
      initial={{ y: -190, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2.3, ease: 'backInOut' }}
    >
      <Link to="/" className="flex items-center justify-center">
        <img src="/icons/logo.png" className="w-[50px] lg:w-[80px]" alt="" />
        <h3 className="text-center font-titr text-lg text-[#e29c01] lg:text-[28px]">
          CofeCo.
        </h3>
      </Link>
    </motion.div>
  )
}

export default Logo

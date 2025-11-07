import StarRating from './StarRating'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
const StarSection = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.4, delay: 1.4, staggerChildren: 0.1 }}
      className="mt-20 flex w-full flex-col items-center justify-center gap-2 md:mt-10 lg:mt-10"
    >
      <h4 className="font-btn text-lg font-bold text-dark-500">
        Your Opinion Matters
      </h4>
      <div className="flex h-[68px] w-[200px] items-center justify-center rounded-md bg-primary-300 shadow-2xl shadow-dark-500/50">
        <StarRating className="" size="38" />
      </div>
    </motion.div>
  )
}

export default StarSection

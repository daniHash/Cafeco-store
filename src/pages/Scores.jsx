// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import useAnimatedCounter from '../hooks/useAnimatedCounter'
import { useSelector } from 'react-redux'

const Scores = () => {
  const { user } = useSelector((state) => state.user)
  const score = useAnimatedCounter(user?.score, 1000)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex w-full flex-col items-center justify-center"
    >
      <h1 className="text mt-14 text-center font-titr text-xl text-white lg:text-4xl">
        Your Score
      </h1>
      <motion.span
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.3 }}
        className="mt-20 text-center font-titr text-8xl text-[#E29E01]"
      >
        {score}
      </motion.span>
      <motion.h3
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-11 text-center font-titr text-sm text-[#E29E01] lg:text-[24px]"
      >
        Out of 100 ({score}%)
      </motion.h3>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="mt-24 w-8/12 text-center font-text text-sm font-bold text-white md:text-lg lg:text-xl"
      >
        If your points reach 100, you will get a 15% discount on your next
        purchase.
      </motion.p>
    </motion.div>
  )
}

export default Scores

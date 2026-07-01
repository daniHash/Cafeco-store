// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAdvice } from './adviceSlice'

const Line = () => {
  const { advice, loading } = useSelector((state) => state.advice)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAdvice())
  }, [dispatch])

  return (
    <div className="w-full">
      <img src="/images/line.png" alt="" className="mt-12 w-full" />
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="my-4 px-8 text-center font-btn text-lg font-bold text-dark-500 sm:px-[70px] md:my-16 md:px-[100px] lg:mt-16 lg:mb-16 lg:px-[140px]"
      >
        "{!loading ? advice : 'Loading...'}"☕✨
      </motion.p>
    </div>
  )
}

export default Line

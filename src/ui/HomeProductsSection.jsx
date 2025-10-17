// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import 'swiper/css'
import SwiperProduct from './Swiper'

const HomeProductsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -150 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="mt-12 w-full px-[140px]"
    >
      <h2 className="text-center font-titr text-4xl text-dark-500">Products</h2>
      <SwiperProduct />
    </motion.section>
  )
}

export default HomeProductsSection

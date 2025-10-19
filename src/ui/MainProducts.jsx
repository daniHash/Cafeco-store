// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import products from '../services/cofe'
import ProductCard from './ProductCard'
import SearchBar from './SearchBar'

const MainProducts = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: 150 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="mt-16 h-[1000px] w-full overflow-auto px-[20px] lg:px-[140px]"
    >
      <h2 className="text-center font-titr text-4xl text-dark-500">Products</h2>
      <SearchBar />
      <div className="mt-18 flex w-full flex-wrap items-center justify-center sm:justify-center sm:gap-10 md:justify-center lg:justify-between">
        {products.map((item) => (
          <ProductCard item={item} />
        ))}
      </div>
    </motion.section>
  )
}

export default MainProducts

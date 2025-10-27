import { useSelector } from 'react-redux'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import ProductCard from '../../ui/ProductCard'

const MainProducts = () => {
  const { products } = useSelector((state) => state.products)
  console.log(products)
  return (
    <motion.section
      initial={{ opacity: 0, x: 150 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="h-[1000px] w-full overflow-auto px-[20px] lg:px-[140px]"
    >
      <div className="mt-18 flex w-full flex-wrap items-center justify-center sm:justify-center sm:gap-10 md:justify-center lg:justify-between">
        {products.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </motion.section>
  )
}

export default MainProducts

import { useSelector } from 'react-redux'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../../ui/ProductCard'

const MainProducts = ({ query }) => {
  const { products = [] } = useSelector((state) => state.products)
  const [searchParams] = useSearchParams()
  const sortValue = searchParams.get('sort')
  let finalProducts = products
  if (query) {
    finalProducts = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    )
  }
  const sortedProducts = [...finalProducts].sort((a, b) =>
    sortValue === 'a-z'
      ? a.title.localeCompare(b.title)
      : sortValue === 'price'
        ? b.price - a.price
        : sortValue === 'rating'
          ? b.rating - a.rating
          : finalProducts
  )

  return (
    <motion.section
      initial={{ opacity: 0, x: 150 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="h-[1000px] w-full overflow-auto px-[20px] lg:px-[140px]"
    >
      <div className="mt-18 flex w-full flex-wrap items-center justify-center sm:justify-center sm:gap-10 md:justify-center lg:justify-between">
        {!sortedProducts.length ? (
          <p className="mt-16 w-full text-center font-text text-xl font-bold text-dark-500">
            No products found
          </p>
        ) : (
          sortedProducts.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))
        )}
      </div>
    </motion.section>
  )
}

export default MainProducts

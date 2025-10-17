import Header from '../ui/Header'
import products from '../services/cofe'
import ProductCard from '../ui/ProductCard'
import Footer from '../ui/Footer'
import Line from '../features/advice/Line'
const Products = () => {
  const topCoffee = products.reduce((top, curr) => {
    return curr.sold > top.sold ? curr : top
  }, products[0])
  return (
    <>
      <Header>
        <div className="mt-20 flex w-full flex-col items-center justify-center gap-12">
          <h1 className="text text-center font-titr text-2xl text-white lg:text-4xl">
            🌟 The most popular choice 🌟
          </h1>
          <ProductCard item={topCoffee} />
        </div>
      </Header>
      <Line />
      <Footer />
    </>
  )
}

export default Products

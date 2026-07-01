import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchProducts } from '../features/product/productSlice'
import Header from '../ui/Header'
import ProductCard from '../ui/ProductCard'
import Footer from '../ui/Footer'
import Line from '../features/advice/Line'
import MainProducts from '../features/product/MainProducts'
import Loader from '../ui/Loader'
import SearchBar from '../ui/SearchBar'
import Error from '../ui/Error'
import ScrollToTopButton from '../ui/ScrollToTopButton'

const Products = () => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    setQuery(e.target.value)
  }

  const {
    products = [],
    isFetched,
    isLoading,
    error,
  } = useSelector((state) => state.products)

  useEffect(() => {
    if (!isFetched) dispatch(fetchProducts())
  }, [dispatch, isFetched])
  if (isLoading) return <Loader />

  const topCoffee = products.reduce((top, curr) => {
    return curr.sold > top.sold ? curr : top
  }, products[0])
  return (
    <>
      <Header>
        <div className="mt-14 flex w-full flex-col items-center justify-center gap-12">
          <h1 className="text text-center font-titr text-xl text-white lg:text-4xl">
            🌟 The most popular choice 🌟
          </h1>
          {error ? (
            <Error>Try again later</Error>
          ) : products.length === 0 ? (
            <p className="mt-16 text-center font-text text-xl font-bold text-dark-500">
              No products available
            </p>
          ) : (
            <ProductCard item={topCoffee} />
          )}
        </div>
      </Header>
      <SearchBar query={query} handleSearch={handleSearch} />
      {error && <Error>Try again later</Error>}
      <MainProducts query={query} />
      <Line />
      <Footer />
      <ScrollToTopButton />
    </>
  )
}

export default Products

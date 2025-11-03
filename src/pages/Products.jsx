import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchProducts } from '../features/product/productSlice'
import Header from '../ui/Header'
import ProductCard from '../ui/ProductCard'
import Footer from '../ui/Footer'
import Line from '../features/advice/Line'
import MainProducts from '../features/product/MainProducts'
import Loader from '../ui/Loader'
import SearchBar from '../ui/SearchBar'
import Error from '../ui/Error'

const Products = () => {
  const dispatch = useDispatch()
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
        <div className="mt-20 flex w-full flex-col items-center justify-center gap-12">
          <h1 className="text text-center font-titr text-xl text-white lg:text-4xl">
            🌟 The most popular choice 🌟
          </h1>
          {error ? (
            <Error>{error}</Error>
          ) : products.length === 0 ? (
            <p className="mt-16 text-center font-text text-xl font-bold text-dark-500">
              There are no products yet
            </p>
          ) : (
            <ProductCard item={topCoffee} />
          )}
        </div>
      </Header>
      <SearchBar />
      {error ? (
        <Error>{error}</Error>
      ) : (
        products.length === 0 && (
          <p className="mt-16 text-center font-text text-xl font-bold text-dark-500">
            There are no products yet
          </p>
        )
      )}
      <MainProducts />
      <Line />
      <Footer />
    </>
  )
}

export default Products

import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../features/product/productSlice'
import ProductCard from './ProductCard'
import Button from './Button'
import Loader from './Loader'
import Error from './Error'

const SwiperProduct = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef(null)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  const {
    products = [],
    isLoading,
    error,
  } = useSelector((state) => state.products)

  const topRatedProducts = products.filter((item) => item.rating > 4.5)

  if (isLoading) return <Loader />
  if (error) return <Error>{error}</Error>

  return (
    <>
      {topRatedProducts.length > 0 ? (
        <>
          <div className="mt-10 flex items-center justify-center">
            <Swiper
              ref={swiperRef}
              slidesPerView={3}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="relative -left-2 w-full sm:right-2 md:left-32 lg:left-8"
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {topRatedProducts.map((p, i) => (
                <SwiperSlide key={i}>
                  <ProductCard
                    item={p}
                    blur={activeIndex !== i && true}
                    scale={activeIndex !== i && true}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="mt-10 flex items-center justify-between gap-5">
            <Button
              type="button"
              classType="round"
              onClick={() => swiperRef.current.swiper.slidePrev()}
            >
              <AiOutlineArrowLeft size={30} color="white" />
            </Button>
            <Link to="/products" className="w-28">
              <Button type="button" classType="show">
                Show more
              </Button>
            </Link>
            <Button
              type="button"
              classType="round"
              onClick={() => swiperRef.current.swiper.slideNext()}
            >
              <AiOutlineArrowRight size={30} color="white" />
            </Button>
          </div>
        </>
      ) : (
        <p className="mt-16 text-center font-text text-xl font-bold text-dark-500">
          There are no products yet
        </p>
      )}
    </>
  )
}

export default SwiperProduct

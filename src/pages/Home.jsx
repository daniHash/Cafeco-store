import { Typewriter } from 'react-simple-typewriter'
import { NavLink } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import Header from '../ui/Header'
import FeatureSection from '../ui/FeatureSection'
import HomeProductsSection from '../features/product/HomeProductsSection'
import Line from '../features/advice/Line'
import Footer from '../ui/Footer'
import Button from '../ui/Button'
import useFetchCart from '../hooks/useFetchCart'

const Home = () => {
  useFetchCart()
  return (
    <>
      <Header bg={true}>
        <div className="flex h-full w-full flex-col items-center justify-center gap-16">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: 'backOut' }}
            className="text text-center font-titr text-2xl text-white lg:text-4xl"
          >
            Start your day with <br />
            <span className="text-[#E19D01]">
              <Typewriter
                words={['CofeCo.']}
                loop={true}
                cursor
                cursorStyle="|"
                cursorColor="white"
                typeSpeed={160}
                deleteSpeed={50}
                delaySpeed={3000}
              />
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'backOut' }}
            className="text-center font-text text-sm font-medium text-white md:text-lg lg:text-xl"
          >
            Step into our cozy café, where the rich aroma of freshly brewed
            coffee greets you, every sip tells a story crafted with passion and
            care, the warm ambiance invites you to relax, connect, and enjoy
            moments that linger, while our baristas create each cup with love,
            blending flavors that awaken your senses, inspiring conversation and
            creativity, making every visit not just a drink, but an experience
            you’ll remember.
          </motion.p>
          <NavLink to="/products">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.5, ease: 'backOut' }}
              className=""
            >
              <Button classType="header" px={50} type="button">
                <span className="font-btn text-sm font-bold lg:text-lg">
                  Products
                </span>
              </Button>
            </motion.div>
          </NavLink>
        </div>
      </Header>
      <FeatureSection />
      <HomeProductsSection />
      <Line />
      <Footer />
    </>
  )
}

export default Home

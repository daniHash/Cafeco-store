import { Typewriter } from 'react-simple-typewriter'
import { NavLink } from 'react-router-dom'
import Header from '../ui/Header'
import FeatureSection from '../ui/FeatureSection'
import HomeProductsSection from '../features/product/HomeProductsSection'
import Line from '../features/advice/Line'
import Footer from '../ui/Footer'
import Button from '../ui/Button'

const Home = () => {
  return (
    <>
      <Header bg={true}>
        <div className="mt-20 flex w-full flex-col items-center justify-center gap-32">
          <h1 className="text text-center font-titr text-2xl text-white lg:text-4xl">
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
          </h1>
          <p className="text-center font-text text-sm font-medium text-white md:text-lg lg:text-xl">
            Step into our cozy café, where the rich aroma of freshly brewed
            coffee greets you, every sip tells a story crafted with passion and
            care, the warm ambiance invites you to relax, connect, and enjoy
            moments that linger, while our baristas create each cup with love,
            blending flavors that awaken your senses, inspiring conversation and
            creativity, making every visit not just a drink, but an experience
            you’ll remember.
          </p>
          <NavLink to="/products">
            <Button classType="header" px={50} type="button">
              <span className="font-btn text-sm font-bold lg:text-lg">
                Products
              </span>
            </Button>
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

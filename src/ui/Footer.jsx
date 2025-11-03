// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="h-auto w-full bg-[url('/images/footerpic.png')] bg-cover bg-center py-10 pt-20 sm:h-auto sm:px-10 md:h-[500px] md:px-20 lg:h-[500px] lg:px-[140px]">
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="flex flex-col items-center justify-around sm:flex-row lg:flex-row">
          <Link to="/" className="flex flex-col items-center justify-center">
            <img
              src="/icons/footer.png"
              className="w-[140px] lg:w-[180px]"
              alt=""
            />
            <h2 className="text-center font-titr text-xl text-white lg:text-4xl">
              CofeCo.
            </h2>
          </Link>
          <div className="flex flex-col items-center justify-center">
            <h2 className="mb-10 font-titr text-xl text-white lg:text-4xl">
              GET IN TOUCH
            </h2>
            <h2 className="font-titr text-2xl text-white">+12 345 67890</h2>
            <a
              className="mt-2 font-titr text-lg text-white lg:text-2xl"
              href="mailto:info@example.com"
            >
              info@example.com
            </a>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="mb-10 font-titr text-xl text-white lg:text-4xl">
              OPEN HOURS
            </h2>
            <h2 className="mb-3 font-titr text-lg text-white lg:text-2xl">
              Monday-Friday
            </h2>
            <h2 className="mb-8 font-titr text-lg text-white lg:text-2xl">
              8.00 AM - 8.00 PM
            </h2>
            <h2 className="mb-3 font-titr text-2xl text-white">
              Saturday - Sunday
            </h2>
            <h2 className="font-titr text-lg text-white lg:text-2xl">
              2.00 PM - 8.00 PM
            </h2>
          </div>
        </div>
        <p className="mt-20 text-center text-white">
          &copy; {new Date().getFullYear()} CafeCo. All rights reserved.
        </p>
      </motion.div>
    </div>
  )
}

export default Footer

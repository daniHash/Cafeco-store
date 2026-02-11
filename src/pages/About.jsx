// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { frontend, backend } from '../utils/helper'
import Line from '../features/advice/Line'
import AboutCard from '../ui/AboutCard'
import Footer from '../ui/Footer'
import Header from '../ui/Header'

const About = () => {
  return (
    <>
      <Header bg={false}>
        <div className="flex h-full w-full flex-col items-center justify-center gap-30">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: 'backOut' }}
            className="text text-center font-titr text-2xl text-white lg:text-4xl"
          >
            About Project
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'backOut' }}
            className="w-[55%] text-center font-text text-sm font-medium text-white md:text-lg lg:text-xl"
          >
            ❛❛ Every idea starts small — like a single coffee bean. With passion
            and creativity, we brew it into something meaningful. We believe
            design and development should blend seamlessly, just like the
            perfect balance of flavor in your favorite cup of coffee. ❜❜
          </motion.p>
        </div>
      </Header>
      <section className="mt-16 w-full px-[20px] lg:px-[140px]">
        <h2 className="text-center font-titr text-4xl text-dark-500">Team</h2>
        <div className="relative inset-0 -z-50">
          <motion.div
            initial={{ opacity: 0, y: -150 }}
            whileInView={{ opacity: 1, y: 50 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute top-[50px] left-[-16%] h-40 w-40 rounded-full bg-[#ab9186] opacity-80 md:h-80 md:w-80 lg:h-80 lg:w-80"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: -150 }}
            whileInView={{ opacity: 1, y: 50 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute top-[400px] right-[-15%] h-36 w-36 rounded-full bg-[#ab9186] opacity-80 md:h-64 md:w-64 lg:h-64 lg:w-64"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: -150 }}
            whileInView={{ opacity: 1, y: 450 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute top-[400px] right-[-15%] h-40 w-40 rounded-full bg-[#ab9186] opacity-80 md:h-80 md:w-80 lg:h-80 lg:w-80"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: -150, x: -1200 }}
            whileInView={{ opacity: 1, y: 750, x: -1200 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute top-[400px] right-[-15%] h-36 w-36 rounded-full bg-[#ab9186] opacity-80 md:h-64 md:w-64 lg:h-64 lg:w-64"
          ></motion.div>
        </div>
        <AboutCard developer={frontend} />
        {/* <AboutCard developer={backend} /> */}
      </section>
      <Line />
      <Footer />
    </>
  )
}

export default About

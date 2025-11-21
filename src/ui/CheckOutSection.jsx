// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import Button from './Button'
const CheckOutSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mt-20 mb-20 h-auto w-full rounded-xl bg-[#D5B690]/65 shadow-form shadow-black/20"
    >
      <div className="mt-20 flex w-full items-center justify-center gap-72">
        <div className="">
          <h2 className="text-center font-titr text-4xl text-dark-500">
            Shipping
          </h2>
          <h3 className="mt-10 text-center font-titr text-lg text-dark-500 lg:text-[28px]">
            Free
          </h3>
        </div>
        <div className="">
          <h2 className="text-center font-titr text-4xl text-dark-500">
            Sub total
          </h2>
          <h3 className="mt-10 text-center font-titr text-lg text-dark-500 lg:text-[28px]">
            300$
          </h3>
        </div>
      </div>
      <div className="">
        <h2 className="mt-16 w-full text-center font-titr text-4xl text-destructive-300">
          Sub total
        </h2>
        <h3 className="mt-10 text-center font-titr text-lg text-destructive-300 lg:text-[28px]">
          300$
        </h3>
      </div>
      <div className="mt-20 flex w-full justify-center">
        <Button classType="primary" px={20}>
          Chekout <span className="ml-20">300$</span>
        </Button>
      </div>
    </motion.div>
  )
}

export default CheckOutSection

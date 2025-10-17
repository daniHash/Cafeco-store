// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { features } from '../utils/helper'
import FeatureItem from './FeatureItem'
const FeatureSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: 150 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="mt-16 w-full px-[20px] lg:px-[140px]"
    >
      <h2 className="text-center font-titr text-4xl text-dark-500">Features</h2>
      <div className="mt-18 flex w-full flex-wrap items-center justify-center sm:justify-center sm:gap-10 md:justify-center lg:justify-between">
        {features.map((item) => (
          <FeatureItem item={item} key={item.titr} />
        ))}
      </div>
    </motion.section>
  )
}

export default FeatureSection

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Button from '../ui/Button'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
}

const Pagenotfound = () => {
  const navigate = useNavigate()

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#f9f4ef]">
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 left-0 h-96 w-96 rounded-full bg-[#D5B690]/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [20, -250, 0],
          y: [20, -600, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#8C5E3C]/40 blur-3xl"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center gap-16"
      >
        <motion.h1
          variants={item}
          className="flex items-center font-mono text-[140px] font-black text-dark-500 md:text-[220px]"
        >
          <motion.span
            whileHover={{
              rotate: -10,
              scale: 1.1,
            }}
          >
            4
          </motion.span>

          <motion.span
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mx-2 text-primary-300"
          >
            0
          </motion.span>

          <motion.span
            whileHover={{
              rotate: 10,
              scale: 1.1,
            }}
          >
            4
          </motion.span>
        </motion.h1>

        <motion.div
          variants={item}
          className="flex flex-col items-center gap-8"
        >
          <h2 className="text-center font-btn text-3xl font-black text-dark-500 md:text-6xl">
            OOPS! PAGE NOT FOUND
          </h2>

          <p className="max-w-xl text-center font-text text-lg text-dark-500/70">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <Button
              classType="primary"
              px={60}
              onClick={() => navigate('/products')}
            >
              Explore Products
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Pagenotfound

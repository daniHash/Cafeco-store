import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleScrollTop}
          className="fixed right-6 bottom-6 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-primary-300 text-white shadow-xl transition-colors hover:bg-primary-400"
        >
          <FaArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTopButton

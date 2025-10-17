// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Navbar = ({ children }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 80) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  return (
    <motion.nav
      className={`fixed top-2 z-50 flex h-20 w-full items-center justify-between rounded-[10px] border-2 border-white/10 ${!scrolled ? 'bg-white/2' : 'bg-dark-500/50'} text-white backdrop-blur-lg`}
      initial={{ y: -180, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, ease: 'backOut' }}
    >
      {children}
    </motion.nav>
  )
}

export default Navbar

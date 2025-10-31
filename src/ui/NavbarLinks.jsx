import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { HiHome } from 'react-icons/hi'
import { GiHamburgerMenu } from 'react-icons/gi'
import {
  AiOutlineInfoCircle,
  AiOutlineProduct,
  AiOutlineUser,
} from 'react-icons/ai'
import Sidebar from './Sidebar'

const NavbarLinks = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      {isOpen && <Sidebar setIsOpen={setIsOpen} />}
      <motion.ul
        initial={{ y: -180, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2.3, ease: 'backInOut' }}
        className="flex items-center justify-center gap-14 px-10"
      >
        <GiHamburgerMenu
          className="lg:hidden"
          size={20}
          cursor="pointer"
          onClick={() => setIsOpen(true)}
        />
        <NavLink
          to="/"
          className="hidden flex-col items-center justify-center sm:hidden md:hidden lg:flex"
        >
          {({ isActive }) => (
            <>
              <HiHome
                size="30px"
                className={`transition-all duration-200 ease-in ${isActive ? 'text-yellow-400' : 'text-white'}`}
              />
              <h5
                className={`transition-all duration-200 ease-in ${isActive ? 'text-yellow-400' : 'text-white'}`}
              >
                Home
              </h5>
            </>
          )}
        </NavLink>
        <NavLink
          to="/about"
          className="hidden flex-col items-center justify-center sm:hidden md:hidden lg:flex"
        >
          {({ isActive }) => (
            <>
              <AiOutlineInfoCircle
                size="30px"
                className={`transition-all duration-200 ease-in ${isActive ? 'text-yellow-400' : 'text-white'}`}
              />
              <h5
                className={`transition-all duration-200 ease-in ${isActive ? 'text-yellow-400' : 'text-white'}`}
              >
                About
              </h5>
            </>
          )}
        </NavLink>
        <NavLink
          to="/products"
          className="hidden flex-col items-center justify-center sm:hidden md:hidden lg:flex"
        >
          {({ isActive }) => (
            <>
              <AiOutlineProduct
                size="30px"
                className={`transition-all duration-200 ease-in ${isActive ? 'text-yellow-400' : 'text-white'}`}
              />
              <h5
                className={`transition-all duration-200 ease-in ${isActive ? 'text-yellow-400' : 'text-white'}`}
              >
                Products
              </h5>
            </>
          )}
        </NavLink>
        <NavLink
          to="/login"
          className="hidden flex-col items-center justify-center sm:hidden md:hidden lg:flex"
        >
          {({ isActive }) => (
            <>
              <FiLogIn
                size="30px"
                className={`transition-all duration-200 ease-in ${isActive ? 'text-yellow-400' : 'text-white'}`}
              />
              <h5
                className={`transition-all duration-200 ease-in ${isActive ? 'text-yellow-400' : 'text-white'}`}
              >
                Login
              </h5>
            </>
          )}
        </NavLink>
        <NavLink
          to="/profile"
          className="hidden flex-col items-center justify-center sm:hidden md:hidden lg:flex"
        >
          {({ isActive }) => (
            <>
              <AiOutlineUser
                size="30px"
                className={`transition-all duration-200 ease-in ${isActive ? 'text-yellow-400' : 'text-white'}`}
              />
              <h5
                className={`transition-all duration-200 ease-in ${isActive ? 'text-yellow-400' : 'text-white'}`}
              >
                Profile
              </h5>
            </>
          )}
        </NavLink>
      </motion.ul>
    </>
  )
}

export default NavbarLinks

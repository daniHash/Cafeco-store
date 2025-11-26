import { NavLink } from 'react-router-dom'
import {
  AiOutlineInfoCircle,
  AiOutlineProduct,
  AiOutlineUser,
} from 'react-icons/ai'
import { CgClose } from 'react-icons/cg'
import { FiLogIn } from 'react-icons/fi'
import { HiHome } from 'react-icons/hi'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const Sidebar = ({ setIsOpen }) => {
  const handleClose = () => setIsOpen(false)
  return (
    <>
      <motion.aside
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        exit={{ opacity: 0, x: 150 }}
        transition={{ duration: 0.2, ease: 'backInOut' }}
        id="logo-sidebar"
        className="fixed -top-2 -right-64 z-40 h-screen w-64 -translate-x-full transition-transform sm:-right-[267.5px] md:-right-[261.5px]"
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto bg-dark-400 px-3 py-4">
          <div className="mb-5 flex items-center justify-between ps-2.5">
            <div className="flex">
              <img
                src="/icons/logo.png"
                className="me-3 h-6 sm:h-7"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                CofeCo.
              </span>
            </div>
            <CgClose
              size={25}
              cursor="pointer"
              className="text-destructive-300"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <ul className="flex flex-col gap-4 divide-accent-500 font-medium">
            <NavLink
              onClick={handleClose}
              to="/"
              className="flex items-center justify-baseline gap-5 rounded-md py-2 transition-all duration-150 ease-in-out hover:bg-dark-500"
            >
              {({ isActive }) => (
                <>
                  <HiHome
                    size="30px"
                    className={isActive ? 'text-yellow-400' : 'text-white'}
                  />
                  <h5 className={isActive ? 'text-yellow-400' : 'text-white'}>
                    Home
                  </h5>
                </>
              )}
            </NavLink>
            <NavLink
              onClick={handleClose}
              to="/about"
              className="flex items-center justify-baseline gap-5 rounded-md py-2 transition-all duration-150 ease-in-out hover:bg-dark-500"
            >
              {({ isActive }) => (
                <>
                  <AiOutlineInfoCircle
                    size="30px"
                    className={isActive ? 'text-yellow-400' : 'text-white'}
                  />
                  <h5 className={isActive ? 'text-yellow-400' : 'text-white'}>
                    About
                  </h5>
                </>
              )}
            </NavLink>
            <NavLink
              onClick={handleClose}
              to="/products"
              className="flex items-center justify-baseline gap-5 rounded-md py-2 transition-all duration-150 ease-in-out hover:bg-dark-500"
            >
              {({ isActive }) => (
                <>
                  <AiOutlineProduct
                    size="30px"
                    className={isActive ? 'text-yellow-400' : 'text-white'}
                  />
                  <h5 className={isActive ? 'text-yellow-400' : 'text-white'}>
                    Products
                  </h5>
                </>
              )}
            </NavLink>
            <NavLink
              onClick={handleClose}
              to="/login"
              className="flex items-center justify-baseline gap-5 rounded-md py-2 transition-all duration-150 ease-in-out hover:bg-dark-500"
            >
              {({ isActive }) => (
                <>
                  <FiLogIn
                    size="30px"
                    className={isActive ? 'text-yellow-400' : 'text-white'}
                  />
                  <h5 className={isActive ? 'text-yellow-400' : 'text-white'}>
                    Login
                  </h5>
                </>
              )}
            </NavLink>
            <NavLink
              onClick={handleClose}
              to="/profile"
              className="flex items-center justify-baseline gap-5 rounded-md py-2 transition-all duration-150 ease-in-out hover:bg-dark-500"
            >
              {({ isActive }) => (
                <>
                  <AiOutlineUser
                    size="30px"
                    className={isActive ? 'text-yellow-400' : 'text-white'}
                  />
                  <h5 className={isActive ? 'text-yellow-400' : 'text-white'}>
                    Profile
                  </h5>
                </>
              )}
            </NavLink>
          </ul>
        </div>
      </motion.aside>
    </>
  )
}

export default Sidebar

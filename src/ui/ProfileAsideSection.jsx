import { NavLink, Outlet } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { CgProfile } from 'react-icons/cg'
import { PiMapPinArea } from 'react-icons/pi'
import { FaOpencart } from 'react-icons/fa'
import { MdOutlineGeneratingTokens } from 'react-icons/md'

const ProfileAsideSection = () => {
  return (
    <div className="mt-16 flex h-[550px] w-15 items-center justify-center rounded-[10px] border-2 border-white/10 bg-white/2 px-2.5 py-2.5 shadow-2xl shadow-black backdrop-blur-lg sm:w-24 md:w-40 lg:w-40">
      <motion.ul
        initial={{ y: -180, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2.3, ease: 'backInOut' }}
        className="flex flex-col items-center justify-center gap-8 px-10 sm:gap-10 md:gap-14 lg:gap-14"
      >
        <NavLink
          to="information"
          className="flex flex-col items-center justify-center"
        >
          {({ isActive }) => (
            <>
              <CgProfile
                size="45px"
                className={`size-7 transition-all duration-200 ease-in sm:size-8 md:size-11 lg:size-11 ${isActive ? 'text-yellow-400' : 'text-white'}`}
              />
              <h5
                className={`mt-2 font-titr text-xs text-wrap transition-all duration-200 ease-in sm:text-sm md:text-lg lg:text-lg ${isActive ? 'text-yellow-400' : 'text-white'}`}
              >
                Information
              </h5>
            </>
          )}
        </NavLink>
        <NavLink
          to="addresses"
          className="flex flex-col items-center justify-center"
        >
          {({ isActive }) => (
            <>
              <PiMapPinArea
                size="45px"
                className={`size-7 transition-all duration-200 ease-in sm:size-8 md:size-11 lg:size-11 ${isActive ? 'text-yellow-400' : 'text-white'}`}
              />
              <h5
                className={`mt-2 font-titr text-xs transition-all duration-200 ease-in sm:text-sm md:text-lg lg:text-lg ${isActive ? 'text-yellow-400' : 'text-white'}`}
              >
                Addresses
              </h5>
            </>
          )}
        </NavLink>
        <NavLink
          to="/cart"
          className="flex flex-col items-center justify-center"
        >
          {({ isActive }) => (
            <>
              <FaOpencart
                size="45px"
                className={`size-7 transition-all duration-200 ease-in sm:size-8 md:size-11 lg:size-11 ${isActive ? 'text-yellow-400' : 'text-white'}`}
              />
              <h5
                className={`mt-2 font-titr text-xs transition-all duration-200 ease-in sm:text-sm md:text-lg lg:text-lg ${isActive ? 'text-yellow-400' : 'text-white'}`}
              >
                Cart
              </h5>
            </>
          )}
        </NavLink>
        <NavLink
          to="scores"
          className="flex flex-col items-center justify-center"
        >
          {({ isActive }) => (
            <>
              <MdOutlineGeneratingTokens
                size="45px"
                className={`size-7 transition-all duration-200 ease-in sm:size-8 md:size-11 lg:size-11 ${isActive ? 'text-yellow-400' : 'text-white'}`}
              />
              <h5
                className={`mt-2 font-titr text-xs transition-all duration-200 ease-in sm:text-sm md:text-lg lg:text-lg ${isActive ? 'text-yellow-400' : 'text-white'}`}
              >
                Scores
              </h5>
            </>
          )}
        </NavLink>
      </motion.ul>
    </div>
  )
}

export default ProfileAsideSection

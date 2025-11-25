import { NavLink, Outlet } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { CgProfile } from 'react-icons/cg'
import { PiMapPinArea } from 'react-icons/pi'
import { FaOpencart } from 'react-icons/fa'
import { MdOutlineGeneratingTokens } from 'react-icons/md'

const ProfileAsideSection = () => {
  return (
    <div className="mt-16 flex h-[550px] w-40 items-center justify-center rounded-[10px] border-2 border-white/10 bg-white/2 px-2.5 py-2.5 shadow-2xl shadow-black backdrop-blur-lg">
      <motion.ul
        initial={{ y: -180, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2.3, ease: 'backInOut' }}
        className="flex flex-col items-center justify-center gap-14 px-10"
      >
        <NavLink
          to="information"
          className="flex flex-col items-center justify-center"
        >
          {({ isActive }) => (
            <>
              <CgProfile
                size="45px"
                className={`transition-all duration-200 ease-in ${isActive ? 'text-yellow-400' : 'text-white'}`}
              />
              <h5
                className={`mt-2 font-titr transition-all duration-200 ease-in ${isActive ? 'text-yellow-400' : 'text-white'}`}
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
                className={`transition-all duration-200 ease-in ${isActive ? 'text-yellow-400' : 'text-white'}`}
              />
              <h5
                className={`mt-2 font-titr transition-all duration-200 ease-in ${isActive ? 'text-yellow-400' : 'text-white'}`}
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
                className={`transition-all duration-200 ease-in ${isActive ? 'text-yellow-400' : 'text-white'}`}
              />
              <h5
                className={`mt-2 font-titr transition-all duration-200 ease-in ${isActive ? 'text-yellow-400' : 'text-white'}`}
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
                className={`transition-all duration-200 ease-in ${isActive ? 'text-yellow-400' : 'text-white'}`}
              />
              <h5
                className={`mt-2 font-titr transition-all duration-200 ease-in ${isActive ? 'text-yellow-400' : 'text-white'}`}
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

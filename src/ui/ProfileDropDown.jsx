// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/auth/authSlice'

const dropdownVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

const ProfileDropdown = ({ open, setIsOpen }) => {
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const handleClose = () => setIsOpen(false)

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={dropdownVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="absolute top-22 right-0 z-50 flex min-w-[180px] flex-col gap-3 rounded-xl border border-white/20 bg-white/10 p-4 text-white shadow-lg backdrop-blur-md"
        >
          <Link
            onClick={handleClose}
            to="/profile"
            className="text-center font-semibold text-white transition-all hover:text-yellow-400"
          >
            Profile
          </Link>
          {!user ? (
            <Link
              onClick={handleClose}
              to="/login"
              className="text-center font-semibold text-white transition-all hover:text-yellow-400"
            >
              Login
            </Link>
          ) : (
            <>
              <h3 className="mb-1 text-center text-sm font-semibold">
                {user?.firstname} {user?.familyname}
              </h3>

              <Link
                onClick={handleClose}
                to="/profile/addresses"
                className="text-center font-semibold text-white transition-all hover:text-yellow-400"
              >
                Addresses
              </Link>

              <button
                className="cursor-pointer text-center font-semibold text-red-400 hover:text-red-500"
                onClick={() => {
                  document.cookie =
                    'token=; path=/; max-age=0; SameSite=Lax; Secure'
                  dispatch(logout())
                }}
              >
                Logout
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProfileDropdown

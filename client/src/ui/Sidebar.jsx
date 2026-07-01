// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { CgClose } from 'react-icons/cg'
import { HiHome } from 'react-icons/hi'
import {
  AiOutlineInfoCircle,
  AiOutlineProduct,
  AiOutlineUser,
} from 'react-icons/ai'
import { FiLogIn } from 'react-icons/fi'
import Logo from './Logo'
import { useEffect } from 'react'

const navLinks = [
  { to: '/', label: 'Home', Icon: HiHome },
  { to: '/about', label: 'About', Icon: AiOutlineInfoCircle },
  { to: '/products', label: 'Products', Icon: AiOutlineProduct },
]
const authLinks = [
  { to: '/login', label: 'Login', Icon: FiLogIn },
  { to: '/profile', label: 'Profile', Icon: AiOutlineUser },
]

const Sidebar = ({ setIsOpen, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <motion.aside
      initial={{ x: '100%', opacity: 0, visibility: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="fixed top-0 right-0 z-40 flex h-screen w-60 flex-col border-l border-[rgba(212,163,72,0.2)] bg-[rgba(44,26,14)] backdrop-blur-2xl"
      style={{
        WebkitBackdropFilter: 'blur(24px) saturate(1.4)',
        backdropFilter: 'blur(24px) saturate(1.4)',
      }}
    >
      <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,163,72,0.4)] to-transparent" />

      <div className="flex items-center justify-between border-b border-[rgba(212,163,72,0.12)] px-5 py-[22px]">
        <div className="flex items-center gap-2.5">
          <Logo />
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="flex h-[30px] w-[30px] items-center justify-center rounded-lg border border-[rgba(180,60,40,0.3)] bg-[rgba(180,60,40,0.15)] text-[#E07060] transition-colors hover:bg-[rgba(180,60,40,0.3)]"
        >
          <CgClose size={15} className="cursor-pointer" />
        </button>
      </div>

      <nav className="flex flex-1 flex-col gap-0.5 px-3 py-3.5">
        {navLinks.map(({ to, label, Icon }) => (
          <NavLink
            key={to}
            to={to}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `relative flex items-center gap-3 rounded-[10px] border px-3 py-[11px] transition-all ${
                isActive
                  ? 'border-[rgba(212,163,72,0.22)] bg-[rgba(212,163,72,0.14)]'
                  : 'border-transparent hover:border-[rgba(212,163,72,0.12)] hover:bg-[rgba(212,163,72,0.08)]'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <span className="absolute top-[20%] bottom-[20%] left-0 w-[3px] rounded-r-full bg-[#D4A348]" />
                )}
                <Icon
                  size={20}
                  className={
                    isActive ? 'text-[#D4A348]' : 'text-[rgba(245,230,200,0.5)]'
                  }
                />
                <span
                  className={`text-sm font-medium ${isActive ? 'text-[#F5E6C8]' : 'text-[rgba(245,230,200,0.6)]'}`}
                >
                  {label}
                </span>
              </>
            )}
          </NavLink>
        ))}

        <div className="mx-1 my-1.5 h-px bg-[rgba(212,163,72,0.1)]" />

        {authLinks.map(({ to, label, Icon }) => (
          <NavLink
            key={to}
            to={to}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `relative flex items-center gap-3 rounded-[10px] border px-3 py-[11px] transition-all ${
                isActive
                  ? 'border-[rgba(212,163,72,0.22)] bg-[rgba(212,163,72,0.14)]'
                  : 'border-transparent hover:border-[rgba(212,163,72,0.12)] hover:bg-[rgba(212,163,72,0.08)]'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <span className="absolute top-[20%] bottom-[20%] left-0 w-[3px] rounded-r-full bg-[#D4A348]" />
                )}
                <Icon
                  size={20}
                  className={
                    isActive ? 'text-[#D4A348]' : 'text-[rgba(245,230,200,0.5)]'
                  }
                />
                <span
                  className={`text-sm font-medium ${isActive ? 'text-[#F5E6C8]' : 'text-[rgba(245,230,200,0.6)]'}`}
                >
                  {label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </motion.aside>
  )
}

export default Sidebar

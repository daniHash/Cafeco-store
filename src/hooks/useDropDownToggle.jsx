import { useEffect, useRef, useState } from 'react'

const useDropdownToggle = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  const toggle = () => setIsOpen((prev) => !prev)
  const close = () => setIsOpen(false)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        close()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return { isOpen, toggle, close, ref }
}

export default useDropdownToggle

const Header = ({ children, bg }) => {
  return (
    <header
      className={`h-[600px] rounded-b-md md:h-[742px] lg:h-[742px] ${!bg ? 'bg-gradient-to-b from-[#3b2419] via-[#1d110b] to-[#100a06]' : "bg-[url('/images/header.jpg')]"} bg-cover bg-center py-10 pt-20 sm:px-10 md:px-20 lg:px-[140px]`}
    >
      {children}
    </header>
  )
}

export default Header

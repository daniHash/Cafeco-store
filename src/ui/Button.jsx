const pxClasses = {
  10: 'px-3',
  20: 'px-5',
  30: 'px-8',
  40: 'px-10',
  50: 'px-12',
  60: 'px-20',
  70: 'px-24',
  80: 'px-32',
}
const Button = ({ children, px, classType, type, onClick, loading }) => {
  const base = `cursor-pointer ${loading && 'opacity-50'} shadow-black py-2.5 font-btn font-black transition-all duration-150 ease-in hover:shadow-2xl`

  const styles = {
    header: base + ` bg-[#ddae45]  rounded-md ${pxClasses[px] || ''}`,
    round:
      base +
      ` bg-primary-300 w-16 h-16 flex justify-center items-center ${pxClasses[px] || ''} rounded-full`,
    roundoutline:
      base +
      ` border-2 border-primary-300 w-14 h-12 mb-3 flex justify-center items-center  ${pxClasses[px] || ''} rounded-full`,
    primary:
      base +
      ` rounded-md bg-primary-300 mb-4 hover:bg-primary-400 text-white flex justify-center items-center ${pxClasses[px] ? pxClasses[px] : 'w-full'}`,
    productsbtn:
      base +
      ` rounded-md mt-5 bg-[#B59D90] mb-4 hover:bg-[#a08a7e]  hover:shadow-xs text-dark-500 flex justify-center items-center ${pxClasses[px] ? pxClasses[px] : 'w-full'}`,
    show:
      base +
      ` rounded-md bg-primary-300 mb-4 hover:bg-primary-500 text-white flex justify-center items-center w-full ${pxClasses[px] ? pxClasses[px] : 'w-full'}`,
    outlineprimary: `py-2.5 transition-all duration-150 ease-in hover:shadow-2xl shadow-black rounded-md bg-transparent border-2 border-primary-300 mb-4 cursor-pointer text-primary-300 flex justify-center items-center ${pxClasses[px] ? pxClasses[px] : 'w-full'}`,
  }
  return (
    <button
      type={type}
      disabled={loading}
      onClick={onClick && onClick}
      className={styles[classType]}
    >
      {children}
    </button>
  )
}

export default Button

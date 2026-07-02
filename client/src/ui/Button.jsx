const pxClasses = {
  10: 'px-3',
  20: 'lg:px-5 md:px-4 px-3',
  30: 'px-8',
  40: 'px-10',
  50: 'px-12',
  60: 'lg:px-20 md:px-16 px-14',
  70: 'px-24',
  80: 'px-32',
}
const Button = ({ children, px, classType, type, onClick, loading }) => {
  const base = `cursor-pointer ${loading && 'opacity-50'} shadow-black py-2.5 font-btn font-black transition-all duration-150 ease-in hover:shadow-2xl`

  const styles = {
    header: base + ` bg-[#ddae45]  rounded-md ${pxClasses[px] || ''}`,
    round:
      base +
      ` bg-primary-300 lg:w-16 lg:h-16 md:w-16 md:h-16 w-10 h-10 flex justify-center items-center ${pxClasses[px] || ''} rounded-full`,
    roundoutline:
      base +
      ` border-2 border-primary-300 w-14 h-12  flex justify-center items-center  ${pxClasses[px] || ''} rounded-full`,
    primary:
      base +
      ` rounded-md bg-primary-300 hover:bg-primary-400 text-white flex justify-center items-center ${pxClasses[px] ? pxClasses[px] : 'w-full'}`,
    productsbtn:
      base +
      ` rounded-md mt-5 bg-[#B59D90] mb-4 hover:bg-[#a08a7e]  hover:shadow-xs text-dark-500 flex justify-center items-center ${pxClasses[px] ? pxClasses[px] : 'w-full'}`,
    show:
      base +
      ` rounded-md bg-primary-300  hover:bg-primary-500 text-white flex justify-center items-center w-full ${pxClasses[px] ? pxClasses[px] : 'w-full'}`,
    outlineprimary: `py-2.5 transition-all duration-150 ease-in hover:shadow-2xl shadow-black rounded-md bg-transparent border-2 border-primary-300  cursor-pointer text-primary-300 flex justify-center items-center ${pxClasses[px] ? pxClasses[px] : 'w-full'}`,
    outlinesecondary: `py-2.5 transition-all duration-150 ease-in rounded-md bg-transparent border-2 border-dark-500 mb-4 cursor-pointer text-dark-500 flex justify-center items-center ${pxClasses[px] ? pxClasses[px] : 'w-full'} sm:px-4 sm:w-auto md:px-6 md:w-48 lg:px-8 lg:w-60`,
    plusmin: `cursor-pointer ${loading && 'opacity-50'} shadow-black lg:py-2.5 md:py-2 py:0.5 font-btn font-black transition-all duration-150 ease-in hover:shadow-2xl
       rounded-md bg-primary-300 hover:bg-primary-400 text-white flex justify-center items-center ${pxClasses[px] ? pxClasses[px] : 'w-full'}`,
    delete: `cursor-pointer ${loading && 'opacity-50'} shadow-black lg:py-2.5 md:py-2 py:0.5 font-btn font-black transition-all duration-150 ease-in hover:shadow-2xl
       rounded-md bg-destructive-300 hover:bg-destructive-400 text-white flex justify-center items-center ${pxClasses[px] ? pxClasses[px] : 'w-full'}`,
    edit:
      base +
      ` rounded-md bg-[#E29E01] hover:bg-[#b98305] text-white flex justify-center items-center ${pxClasses[px] ? pxClasses[px] : 'w-full'}`,
    disable:
      base +
      ` rounded-md bg-primary-300 opacity-50 hover:bg-primary-400 text-white flex justify-center items-center ${pxClasses[px] ? pxClasses[px] : 'w-full'}`,
    prof:
      base +
      ` rounded-md bg-box-300  hover:bg-primary-400 text-white flex justify-center items-center ${pxClasses[px] ? pxClasses[px] : 'w-full'}`,
    anable:
      base +
      ` rounded-md bg-primary-300 hover:bg-primary-400 text-white flex justify-center items-center ${pxClasses[px] ? pxClasses[px] : 'w-full'}`,
    logout:
      base +
      ` rounded-md bg-destructive-300 hover:bg-destructive-400 text-white flex justify-center items-center ${pxClasses[px] ? pxClasses[px] : 'w-full'}`,
  }
  return (
    <>
      {classType === 'disable' ? (
        <button
          type={type}
          disabled={true}
          onClick={onClick && onClick}
          className={styles[classType]}
        >
          {children}
        </button>
      ) : (
        <button
          type={type}
          disabled={loading}
          onClick={onClick && onClick}
          className={styles[classType]}
        >
          {children}
        </button>
      )}
    </>
  )
}

export default Button

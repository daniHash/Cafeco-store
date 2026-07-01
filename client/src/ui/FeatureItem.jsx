const FeatureItem = ({ item }) => {
  return (
    <div className="flex w-[300px] flex-col items-center justify-center gap-8 sm:w-[280px] md:w-[270px] lg:mb-8 lg:w-[370px]">
      <h3 className="text-center font-titr text-lg text-dark-500 lg:text-[28px]">
        {item.icon} {item.titr}
      </h3>
      <p className="w-[300px] text-center font-text text-sm text-dark-500 lg:text-xl">
        {item.description}
      </p>
    </div>
  )
}

export default FeatureItem

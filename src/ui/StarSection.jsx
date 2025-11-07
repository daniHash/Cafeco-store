import StarRating from './starRating'

const StarSection = () => {
  return (
    <div className="mt-20 flex w-full flex-col items-center justify-center gap-2 md:mt-10 lg:mt-10">
      <h4 className="font-btn text-lg font-bold text-dark-500">
        Your Opinion Matters
      </h4>
      <div className="flex h-[68px] w-[200px] items-center justify-center rounded-md bg-primary-300 shadow-2xl shadow-dark-500/50">
        <StarRating className="" size="38" />
      </div>
    </div>
  )
}

export default StarSection

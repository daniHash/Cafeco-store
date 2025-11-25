const Scores = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="text mt-14 text-center font-titr text-xl text-white lg:text-4xl">
        Your Score
      </h1>
      <span className="mt-20 text-center font-titr text-8xl text-[#E29E01]">
        80
      </span>
      <h3 className="mt-11 text-center font-titr text-sm text-[#E29E01] lg:text-[24px]">
        Out of 100 (80%)
      </h3>
      <p className="mt-24 w-8/12 text-center font-text text-sm font-bold text-white md:text-lg lg:text-xl">
        If your points reach 100, you will get a 15% discount on your next
        purchase.
      </p>
    </div>
  )
}

export default Scores

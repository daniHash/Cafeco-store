import { FaOpencart, FaSortAmountDown } from 'react-icons/fa'
import { LuListFilter } from 'react-icons/lu'
import Button from '../ui/Button'

const SearchBar = () => {
  return (
    <div className="mt-8 flex w-full items-center justify-between">
      <div className="flex items-center justify-center gap-3">
        <Button classType="productsbtn" type="button" px={20}>
          <span className="flex items-center justify-center gap-2">
            Filter <LuListFilter size={22} />
          </span>
        </Button>
        <Button classType="productsbtn" type="button" px={20}>
          <span className="flex items-center justify-center gap-3">
            Sort <FaSortAmountDown size={20} />
          </span>
        </Button>
        <Button classType="productsbtn" type="button" px={20}>
          <span className="flex items-center justify-center gap-3">
            Cart <FaOpencart size={20} />
          </span>
        </Button>
      </div>
      <input
        type="text"
        name="products"
        placeholder="Search..."
        className="w-[300px] rounded-sm border-r-2 border-b-2 border-r-primary-500 border-b-primary-500 bg-[#B59D90] px-2.5 py-2.5 font-text font-black text-dark-500 transition-all duration-300 ease-in outline-none focus:shadow-form"
        id="searchInp"
      />
    </div>
  )
}

export default SearchBar

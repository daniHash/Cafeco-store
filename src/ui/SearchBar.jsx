import { FaOpencart, FaSortAmountDown } from 'react-icons/fa'
import { LuListFilter } from 'react-icons/lu'
import { useState } from 'react'
import Button from '../ui/Button'
import SortPopover from './SortPopover'

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen((open) => !open)
  }

  return (
    <div className="mt-16">
      <h2 className="text-center font-titr text-4xl text-dark-500">Products</h2>
      <div className="mt-8 flex w-full items-center justify-between px-[20px] lg:px-[140px]">
        <div className="flex items-start justify-center gap-30">
          <Button classType="productsbtn" type="button" px={20}>
            <span className="flex items-center justify-center gap-2">
              Filter <LuListFilter size={22} />
            </span>
          </Button>
          <div className="absolute ml-1 flex flex-col items-center justify-center">
            <Button
              classType="productsbtn"
              type="button"
              px={20}
              onClick={handleOpen}
            >
              <span className="flex items-center justify-center gap-3">
                Sort <FaSortAmountDown size={20} />
              </span>
            </Button>
            {isOpen && <SortPopover handleOpen={handleOpen} />}
          </div>
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
    </div>
  )
}

export default SearchBar

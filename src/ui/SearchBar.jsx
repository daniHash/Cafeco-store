import { FaOpencart, FaSortAmountDown } from 'react-icons/fa'
import { LuListFilter } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'
import Button from '../ui/Button'
import SortDropDown from './SortDropDown'
import useDropdownToggle from '../hooks/useDropDownToggle'
import FilterDropDown from './FilterDropDown'
const SearchBar = ({ query, handleSearch }) => {
  const navigate = useNavigate()
  const filter = useDropdownToggle()
  const sort = useDropdownToggle()
  const handleOpen = (type) => {
    if (type === 'filter') {
      filter.toggle()
      sort.close()
    } else {
      sort.toggle()
      filter.close()
    }
  }

  const handleSort = (e) => {
    sort.toggle()
    const value = e.target.innerText.toLowerCase().split(' ')
    navigate(`/products?sort=${value[value.length - 1]}`)
  }

  return (
    <div className="mt-16">
      <h2 className="text-center font-titr text-4xl text-dark-500">Products</h2>
      <div className="mt-4 flex w-full flex-col-reverse items-center justify-between px-5 lg:flex-row lg:px-[140px]">
        <div className="flex items-start justify-center gap-30">
          <div
            ref={filter.ref}
            className="relative flex flex-col items-center justify-center"
          >
            <Button
              classType="productsbtn"
              type="button"
              px={20}
              onClick={() => handleOpen('filter')}
            >
              <span className="flex items-center justify-center gap-2">
                Filter <LuListFilter size={22} />
              </span>
            </Button>
            {filter.isOpen && (
              <div className="absolute top-full left-0 z-50">
                <FilterDropDown closeDropdown={() => filter.close()} />
              </div>
            )}
          </div>
          <div
            ref={sort.ref}
            className="absolute ml-1 flex flex-col items-center justify-center"
          >
            <Button
              classType="productsbtn"
              type="button"
              px={20}
              onClick={() => handleOpen('sort')}
            >
              <span className="flex items-center justify-center gap-3">
                Sort <FaSortAmountDown size={20} />
              </span>
            </Button>
            {sort.isOpen && <SortDropDown handleSort={handleSort} />}
          </div>
          <Button
            onClick={() => navigate('/cart')}
            classType="productsbtn"
            type="button"
            px={20}
          >
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
          value={query}
          onChange={handleSearch}
        />
      </div>
    </div>
  )
}

export default SearchBar

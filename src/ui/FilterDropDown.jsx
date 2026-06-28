// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useState } from 'react'
import { categories, notify } from '../utils/helper'
import Button from './Button'

const FilterDropDown = ({ closeDropdown }) => {
  const [category, setCategory] = useState('')
  const [subCategory, setSubCategory] = useState('')

  const subCategories = category ? categories[category] : []
  const handleFilter = () => {
    !subCategory
      ? notify('error', 'Please select the subcategory')
      : console.log('Category:', category, 'Subcategory:', subCategory)
    closeDropdown()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="relative z-50 flex w-60 flex-col items-center justify-center overflow-hidden rounded-md bg-[#B59D90] px-2 py-0 font-bold"
    >
      <div className="mt-2 flex w-full flex-col items-center justify-center">
        <label
          htmlFor="categ"
          className="mb-2 block w-full text-center font-btn font-bold text-dark-500"
        >
          Category
        </label>
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value)
            setSubCategory('')
          }}
          id="categ"
          className="block w-full cursor-pointer rounded-md border-none bg-primary-200 p-2 text-center font-btn font-bold text-dark-500 outline-none"
        >
          <option value="">Select Category</option>
          {Object.keys(categories).map((cat) => (
            <option key={cat} className="font-bold capitalize" value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {subCategories.length > 0 && (
        <div className="mt-5 flex w-full flex-col items-center justify-center">
          <label
            htmlFor="subcateg"
            className="mb-2 block w-full text-center font-btn font-bold text-dark-500"
          >
            Subcategory
          </label>
          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            id="subcateg"
            className="block w-full cursor-pointer rounded-md border-none bg-primary-200 p-2 text-center font-btn font-bold text-dark-500 outline-none"
          >
            <option value="">Select Subcategory</option>
            {subCategories.map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        </div>
      )}

      <Button classType="productsbtn" onClick={handleFilter}>
        Filter
      </Button>
    </motion.div>
  )
}

export default FilterDropDown

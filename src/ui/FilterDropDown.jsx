// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useState } from 'react'
import { categories } from '../utils/helper'
import Button from './Button'
import { Link, useSearchParams } from 'react-router-dom'

const FilterDropDown = ({ closeDropdown }) => {
  const [category, setCategory] = useState('')

  const [searchParams] = useSearchParams()
  const params = new URLSearchParams(searchParams)
  params.set('category', category)

  const handleFilter = () => {
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
          }}
          id="categ"
          className="block w-full cursor-pointer rounded-md border-none bg-primary-200 p-2 text-center font-btn font-bold text-dark-500 outline-none"
        >
          <option value="">Select Category</option>
          <option className="font-bold capitalize" value="all">
            All products
          </option>
          {Object.keys(categories).map((cat) => (
            <option key={cat} className="font-bold capitalize" value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <Link className="w-full" to={`?${params.toString()}`}>
        <Button classType="productsbtn" onClick={handleFilter}>
          Filter
        </Button>
      </Link>
    </motion.div>
  )
}

export default FilterDropDown

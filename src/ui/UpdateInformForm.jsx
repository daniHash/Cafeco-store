import { useState } from 'react'
import Button from './Button'

const initialInfo = {
  name: 'Danial',
  lastname: 'Hajhashemkhani',
  phone: '09034905933',
  email: 'danihashdev@gmail.com',
}

const UpdateInformForm = () => {
  const [information, setInformation] = useState(initialInfo)

  const isChanged = JSON.stringify(information) !== JSON.stringify(initialInfo)

  const handleChange = (field, value) => {
    setInformation((prev) => ({
      ...prev,
      [field]: value,
    }))
  }
  return (
    <form className="mt-12 flex w-full flex-col items-center justify-center gap-6">
      <div className="flex w-2/5 flex-col gap-2">
        <label htmlFor="name" className="font-titr text-[14px] text-white">
          Name:
        </label>
        <input
          className="w-full border-none font-text text-sm font-bold text-[#E29E01] transition-all duration-300 ease-in-out outline-none focus:scale-105 md:text-lg lg:text-xl"
          type="text"
          value={information.name}
          onChange={(e) => handleChange('name', e.target.value)}
          id="name"
        />
      </div>
      <div className="flex w-2/5 flex-col gap-2">
        <label className="font-titr text-[14px] text-white">Lastname:</label>
        <input
          className="w-full border-none font-text text-sm font-bold text-[#E29E01] transition-all duration-300 ease-in-out outline-none focus:scale-105 md:text-lg lg:text-xl"
          type="text"
          value={information.lastname}
          onChange={(e) => handleChange('lastname', e.target.value)}
        />
      </div>
      <div className="flex w-2/5 flex-col gap-2">
        <label className="font-titr text-[14px] text-white">Phone:</label>
        <input
          className="w-full border-none font-text text-sm font-bold text-[#E29E01] transition-all duration-300 ease-in-out outline-none focus:scale-105 md:text-lg lg:text-xl"
          type="text"
          value={information.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
        />
      </div>
      <div className="flex w-2/5 flex-col gap-2">
        <label className="font-titr text-[14px] text-white">Email:</label>
        <input
          className="w-full border-none font-text text-sm font-bold text-[#E29E01] transition-all duration-300 ease-in-out outline-none focus:scale-105 md:text-lg lg:text-xl"
          type="text"
          value={information.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
      </div>
      <Button
        px={20}
        classType={isChanged ? 'primary' : 'disable'}
        type="submit"
      >
        Update
      </Button>
    </form>
  )
}

export default UpdateInformForm

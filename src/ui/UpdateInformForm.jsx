import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import Button from './Button'

const initialInfo = {
  name: 'Danial',
  lastname: 'Hajhashemkhani',
  phone: '09034905933',
  email: 'danihashdev@gmail.com',
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
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
    <motion.form
      className="mt-12 flex w-full flex-col items-center justify-center gap-6"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.08 }}
    >
      <motion.div variants={fadeUp} className="flex w-2/5 flex-col gap-2">
        <label htmlFor="name" className="font-titr text-[14px] text-white">
          Name:
        </label>
        <motion.input
          className="w-full rounded-md border-none px-2 font-text text-sm font-bold text-[#E29E01] transition-all duration-300 outline-none md:text-lg lg:text-xl"
          type="text"
          id="name"
          name="firstname"
          value={information.name}
          onChange={(e) => handleChange('name', e.target.value)}
          whileFocus={{ scale: 1.03, boxShadow: '0 0 10px #E29E01aa' }}
          transition={{ type: 'spring', stiffness: 250, damping: 15 }}
        />
      </motion.div>
      <motion.div variants={fadeUp} className="flex w-2/5 flex-col gap-2">
        <label htmlFor="lastname" className="font-titr text-[14px] text-white">
          Lastname:
        </label>
        <motion.input
          className="w-full rounded-md border-none px-2 font-text text-sm font-bold text-[#E29E01] transition-all duration-300 outline-none md:text-lg lg:text-xl"
          type="text"
          id="lastname"
          name="familyname"
          value={information.lastname}
          onChange={(e) => handleChange('lastname', e.target.value)}
          whileFocus={{ scale: 1.03, boxShadow: '0 0 10px #E29E01aa' }}
        />
      </motion.div>
      <motion.div variants={fadeUp} className="flex w-2/5 flex-col gap-2">
        <label htmlFor="phone" className="font-titr text-[14px] text-white">
          Phone:
        </label>
        <motion.input
          className="w-full rounded-md border-none px-2 font-text text-sm font-bold text-[#E29E01] transition-all duration-300 outline-none md:text-lg lg:text-xl"
          type="text"
          id="phone"
          name="tel"
          value={information.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          whileFocus={{ scale: 1.03, boxShadow: '0 0 10px #E29E01aa' }}
        />
      </motion.div>
      <motion.div variants={fadeUp} className="flex w-2/5 flex-col gap-2">
        <label htmlFor="em" className="font-titr text-[14px] text-white">
          Email:
        </label>
        <motion.input
          className="w-full rounded-md border-none px-2 font-text text-sm font-bold text-[#E29E01] transition-all duration-300 outline-none md:text-lg lg:text-xl"
          type="email"
          id="em"
          name="email"
          value={information.email}
          onChange={(e) => handleChange('email', e.target.value)}
          whileFocus={{ scale: 1.03, boxShadow: '0 0 10px #E29E01aa' }}
        />
      </motion.div>
      <motion.div variants={fadeUp}>
        <motion.div
          animate={{
            scale: isChanged ? 1 : 0.9,
            opacity: isChanged ? 1 : 0.5,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 15,
          }}
        >
          <Button
            px={20}
            classType={isChanged ? 'primary' : 'disable'}
            type="submit"
          >
            Update
          </Button>
        </motion.div>
      </motion.div>
    </motion.form>
  )
}

export default UpdateInformForm

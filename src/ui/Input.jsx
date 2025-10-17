// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import PhoneInput from 'react-phone-input-2'

const Input = ({ input, onChange, value, errors }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="flex w-full flex-col gap-2"
    >
      <label htmlFor={input.id} className="font-titr text-[14px] text-textform">
        {input.label}:
      </label>
      {input.type !== 'tel' ? (
        <input
          type={input.type}
          id={input.id}
          name={input.name}
          className={`w-full rounded-md ${errors && 'border-2 border-destructive-300'} bg-primary-100 px-2 py-1.5 text-textform transition-all duration-200 ease-in outline-none focus:shadow-form`}
          placeholder={input.placeholder || ''}
          autoFocus={input.id === 'name' || input.id === 'phone'}
          required
          pattern={input.pattern}
          title={input.title}
          onChange={onChange}
          value={value}
        />
      ) : (
        <PhoneInput
          country={'ir'}
          value={value}
          onChange={onchange}
          containerClass="!w-full"
          buttonClass="!bg-primary-100 "
          dropdownClass="!bg-primary-100 !text-textform !font-titr text-sm !rounded-md"
          inputClass={`!w-full !rounded-md !bg-primary-100 !pl-[48px] !py-1.5 !text-textform !transition-all !duration-200 !ease-in !outline-none focus:!shadow-form ${
            errors ? '!border-2 !border-destructive-300' : ''
          }`}
          inputProps={{
            pattern: input.pattern,
            title: input.title,
            required: true,
          }}
          placeholder="example: +98..."
        />
      )}
    </motion.div>
  )
}

export default Input

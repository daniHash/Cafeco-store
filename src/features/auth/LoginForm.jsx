import { RxReset } from 'react-icons/rx'
import { inputs } from '../../utils/helper'
import Button from '../../ui/Button'
import Input from '../../ui/Input'
import SpanForm from '../../ui/SpanForm'
import useLoginForm from '../../hooks/useLoginForm'
import 'notyf/notyf.min.css'

const RegisterForm = () => {
  const { values, errors, handleChange, handleReset, handleSubmit } =
    useLoginForm()
  return (
    <div className="flex h-8/12 w-md items-center justify-start overflow-hidden rounded-3xl bg-accent-300 shadow-form md:w-xl lg:w-1/2">
      <div className="hidden h-full w-1/2 bg-[url('/images/login.jpg')] bg-cover md:hidden lg:block"></div>
      <form
        action=""
        onSubmit={handleSubmit}
        autoComplete="on"
        className="flex h-full w-full flex-col items-center justify-evenly px-8 md:w-full lg:w-1/2"
      >
        <h2 className="mt-8 text-center font-titr text-4xl text-textform">
          Welcome Back
        </h2>

        <div className="w-full space-y-8">
          {inputs.map((input) => (
            <Input
              input={input}
              value={values[input.name] || ''}
              onChange={handleChange}
              errors={errors[input.name]}
              key={input.id}
            />
          ))}
        </div>

        <div className="mt-2 flex w-full items-center justify-center gap-2">
          <Button classType="roundoutline" type="button" onClick={handleReset}>
            <RxReset size={30} color="#8d6e63" />
          </Button>
          <Button classType="primary" type="submit">
            <span className="font-btn text-sm font-bold lg:text-lg">Login</span>
          </Button>
        </div>

        <SpanForm status="register" />
      </form>
    </div>
  )
}

export default RegisterForm

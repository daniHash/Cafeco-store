import { useSelector } from 'react-redux'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { firstStep } from '../../utils/helper'
import { secondStep } from '../../utils/helper'
import Button from '../../ui/Button'
import Input from '../../ui/Input'
import SpanForm from '../../ui/SpanForm'
import useRegisterForm from '../../hooks/useRegisterForm'
import 'notyf/notyf.min.css'
import 'sweetalert2/dist/sweetalert2.min.css'

const RegisterForm = () => {
  const {
    showNextStep,
    values,
    errors,
    handleChange,
    handleSubmit,
    handleSetShow,
  } = useRegisterForm()
  const loading = useSelector((state) => state.user.loading)
  const step = showNextStep ? secondStep : firstStep
  return (
    <div className="flex h-8/12 w-md items-center justify-start overflow-hidden rounded-3xl bg-accent-300 shadow-form md:w-xl lg:w-1/2">
      <div className="hidden h-full w-1/2 bg-[url('/images/register.png')] bg-cover md:hidden lg:block"></div>
      <form
        action=""
        autoComplete="on"
        onSubmit={handleSubmit}
        className="flex h-full w-full flex-col items-center justify-evenly px-8 md:w-full lg:w-1/2"
      >
        {!showNextStep && (
          <h2 className="mt-8 text-center font-titr text-4xl text-textform">
            Welcome
          </h2>
        )}
        <div
          className={`w-full ${showNextStep ? 'mt-10 space-y-4' : 'space-y-8'}`}
        >
          {step.map((input) => (
            <Input
              input={input}
              value={values[input.name] || ''}
              onChange={handleChange}
              errors={errors[input.name]}
              key={input.id}
            />
          ))}
        </div>
        {!showNextStep ? (
          <Button classType="round" type="button" onClick={handleSetShow}>
            <AiOutlineArrowRight size={30} color="white" />
          </Button>
        ) : (
          <div className="mt-2 flex w-full items-center justify-center gap-2">
            <Button
              classType="outlineprimary"
              type="button"
              px={10}
              onClick={handleSetShow}
            >
              <span className="font-btn text-sm font-bold lg:text-lg">
                Back
              </span>
            </Button>
            <Button classType="primary" type="submit" loading={loading}>
              <span className="font-btn text-sm font-bold lg:text-lg">
                {loading ? 'Loading...' : 'Register'}
              </span>
            </Button>
          </div>
        )}
        <SpanForm status="login" />
      </form>
    </div>
  )
}

export default RegisterForm

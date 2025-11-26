import { useEffect, useState } from 'react'
import { secondStep } from '../utils/helper'
import { notify } from '../utils/helper'
import { useDispatch, useSelector } from 'react-redux'
import { registerFetch, resetStatus } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
const useRegisterForm = () => {
  const [showNextStep, setShowNextStep] = useState(false)
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const success = useSelector((state) => state.user.success)

  useEffect(() => {
    if (success) {
      navigate('/products')
      dispatch(resetStatus())
    }
  }, [success, dispatch, navigate])

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    let newErrors = {}

    secondStep.forEach((field) => {
      const value = values[field.name]
      if (field.regex)
        if (!field.regex.test(value)) newErrors[field.name] = field.regexErr
    })

    if (values.password !== values.confrimpassword)
      newErrors.confrimpassword = 'Passwords must match'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      notify('error', 'Some fields have error!⚠️')
      return
    }

    const id = `${Date.now().toString(36)}_${Math.random().toString(36).substring(2, 8)}`
    dispatch(
      registerFetch({ id, ...values, score: 0, addresses: [], orders: [] })
    )
  }

  const handleSetShow = () => {
    values['firstname'].length < 2 || values['familyname'].length < 2
      ? notify('error', 'Please enter a longer first or lastname')
      : setShowNextStep((show) => !show)
  }

  return {
    showNextStep,
    values,
    errors,
    handleChange,
    handleSubmit,
    handleSetShow,
  }
}

export default useRegisterForm

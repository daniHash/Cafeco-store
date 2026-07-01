import { useEffect, useState } from 'react'
import { inputs } from '../utils/helper'
import { notify } from '../utils/helper'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import { loginFetch, resetStatus } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

const useRegisterForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const success = useSelector((state) => state.user.success)

  useEffect(() => {
    if (success) {
      navigate('/products')
      dispatch(resetStatus())
    }
  }, [success, dispatch, navigate])

  const handleReset = () => {
    setValues({})
  }
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const handlePhoneChange = (phone, name) => {
    setValues({ ...values, [name]: phone })
    console.log(values.number)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    let newErrors = {}

    inputs.forEach((field) => {
      const value = values[field.name]
      if (!field.regex.test(value)) newErrors[field.name] = field.regexErr
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      notify('error', 'Some fields have error!⚠️')
      return
    }

    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Your registration is completed.',
      confirmButtonText: 'OK',
      // color: "#8d6e63",
      background: '#f4e8d8',
      color: '#321e18',
    })
    dispatch(loginFetch(values))
  }

  return {
    values,
    errors,
    handleChange,
    handlePhoneChange,
    handleSubmit,
    handleReset,
  }
}

export default useRegisterForm

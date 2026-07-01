import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateFetch, updateUser } from '../features/auth/authSlice'
import { notify } from '../utils/helper'

const useUpdateInfoForm = () => {
  const dispatch = useDispatch()
  const { loading, error, user } = useSelector((state) => state.user)

  const [information, setInformation] = useState({
    firstname: '',
    familyname: '',
    number: '',
    email: '',
  })

  useEffect(() => {
    if (user) setInformation(user)
  }, [user])

  const isChanged = user && JSON.stringify(information) !== JSON.stringify(user)

  const handleChange = (field, value) => {
    setInformation((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!user) return
    if (
      !information.firstname ||
      !information.familyname ||
      !information.number ||
      !information.email
    ) {
      return notify('error', 'Please fill all fields')
    }
    dispatch(updateFetch({ id: user.id, body: information }))
      .unwrap()
      .then(() => dispatch(updateUser(information)))
      .catch(() => notify('error', 'Try again later'))
  }

  return {
    user,
    error,
    loading,
    information,
    isChanged,
    handleChange,
    handleSubmit,
  }
}

export default useUpdateInfoForm

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateFetch, updateUser } from '../features/auth/authSlice'

const useUpdateInfoForm = () => {
  const dispatch = useDispatch()
  const { loading, error, user } = useSelector((state) => state.user)

  const [information, setInformation] = useState({
    firstname: '',
    familyname: '',
    number: '',
    email: '',
  })

  // وقتی user از سرور یا localStorage لود شد → فرم آپدیت شود
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

    dispatch(updateUser(information))
    dispatch(updateFetch({ id: user.id, body: information }))
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

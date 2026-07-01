import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  deleteAddressFetch,
  deleteAddressFromUser,
  editAddressFetch,
  editAddressInUser,
} from '../features/auth/authSlice'
import { notify } from '../utils/helper'

const useAddressActions = (userId, addresse = null) => {
  const dispatch = useDispatch()
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [editedAddress, setEditedAddress] = useState(addresse.address)

  const handleDelete = () => {
    dispatch(deleteAddressFetch({ userId, addressId: addresse.id }))
      .unwrap()
      .then(() => dispatch(deleteAddressFromUser(addresse.id)))
      .catch(() => notify('error', 'Try again later'))
  }

  const handleSave = () => {
    if (!editedAddress.trim()) return notify('error', 'Address cannot be empty')

    dispatch(
      editAddressFetch({
        userId,
        addressId: addresse.id,
        body: { address: editedAddress },
      })
    )
      .unwrap()
      .then(() =>
        dispatch(editAddressInUser({ id: addresse.id, address: editedAddress }))
      )
      .catch(() => notify('error', 'Try again later'))
    setIsEditOpen(false)
  }

  const openEdit = () => setIsEditOpen(true)
  const closeEdit = () => setIsEditOpen(false)

  return {
    isEditOpen,
    editedAddress,
    setEditedAddress,
    handleDelete,
    handleSave,
    openEdit,
    closeEdit,
  }
}

export default useAddressActions

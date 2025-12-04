import { swal } from '../utils/helper'
import Cookies from 'js-cookie'

const BASE_URL = 'http://localhost:3000/api/v2/auth'

export const login = async (body) => {
  const res = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(body),
  })

  if (!res.ok) throw new Error('Failed to fetch profile')

  return res.json()
}

export const register = async (body) => {
  try {
    const res = await fetch('http://localhost:8000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    if (res.ok) {
      swal('success', 'Success!', 'Your registration is completed.')
    } else {
      swal('error', 'Error!', 'Try again later.')
      throw new Error('Failed to register user')
    }
    const data = await res.json()
    Cookies.set('token', 'data.token', { expires: 0.5, secure: true })
    return data
  } catch {
    swal('error', 'Error!', 'Try again later.')
    throw new Error('Failed to register user')
  }
}

export const update = async (id, body) => {
  const res = await fetch(`http://localhost:8000/users/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!res.ok) throw new Error('Failed to update user')

  const data = await res.json()
  return data
}

export const getUser = async (id) => {
  const res = await fetch(`http://localhost:8000/users/${id}`)

  if (!res.ok) throw new Error('Failed to get user')

  const data = await res.json()
  return data
}

export const addAddress = async (userId, newAddress) => {
  const user = await getUser(userId)
  const id = `${Date.now()}`

  const updatedUser = {
    ...user,
    addresses: [...(user.addresses || []), { id, address: newAddress }],
  }

  const res = await fetch(`http://localhost:8000/users/${userId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedUser),
  })

  if (!res.ok) throw new Error('Failed to add address')
  return res.json()
}

export const editAddress = async (userId, addressId, body) => {
  const user = await getUser(userId)

  const updatedAddresses = user.addresses.map((item) =>
    item.id === addressId ? { ...item, ...body } : item
  )

  const res = await fetch(`http://localhost:8000/users/${userId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...user, addresses: updatedAddresses }),
  })

  if (!res.ok) throw new Error('Failed to edit address')
  return res.json()
}

export const deleteAddress = async (userId, addressId) => {
  const user = await getUser(userId)

  const updatedAddresses = user.addresses.filter(
    (item) => item.id !== addressId
  )

  const res = await fetch(`http://localhost:8000/users/${userId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...user, addresses: updatedAddresses }),
  })

  if (!res.ok) throw new Error('Failed to delete address')
  return res.json()
}

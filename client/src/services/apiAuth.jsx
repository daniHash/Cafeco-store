import { swal } from '../utils/helper'
import Cookies from 'js-cookie'

const BASE_URL = 'http://localhost:8000/users'

export const login = async (body) => {
  const res = await fetch(`${BASE_URL}?email=${body.email}`)
  const users = await res.json()

  const user = users[0]
  if (!user || user.password !== body.password) {
    swal('error', 'Error!', 'Invalid email or password.')
    throw new Error('Invalid credentials')
  }

  Cookies.set('token', user.id, { expires: 0.5, secure: true })
  return user
}

export const register = async (body) => {
  try {
    const checkRes = await fetch(`${BASE_URL}?email=${body.email}`)
    const emailMatches = await checkRes.json()

    console.log(body.number)
    const phoneRes = await fetch(`${BASE_URL}?number=${body.number}`)

    const phoneMatches = await phoneRes.json()

    if (emailMatches.length > 0 || phoneMatches.length > 0) {
      swal(
        'error',
        'Error!',
        'This email or phone number is already registered.'
      )
      throw new Error('Duplicate user')
    }

    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      swal('error', 'Error!', 'Try again later.')
      throw new Error('Failed to register user')
    }

    const data = await res.json()
    swal('success', 'Success!', 'Your registration is completed.')
    Cookies.set('token', data.id, { expires: 0.5, secure: true })
    return data
  } catch (err) {
    if (err.message !== 'Duplicate user') {
      swal('error', 'Error!', 'Try again later.')
    }
    throw err
  }
}

export const update = async (id, body) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!res.ok) throw new Error('Failed to update user')

  const data = await res.json()
  return data
}

export const getUser = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`)

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

  const res = await fetch(`${BASE_URL}/${userId}`, {
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

  const res = await fetch(`${BASE_URL}/${userId}`, {
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

  const res = await fetch(`${BASE_URL}/${userId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...user, addresses: updatedAddresses }),
  })

  if (!res.ok) throw new Error('Failed to delete address')
  return res.json()
}

export const apiCreateOrder = async (userId, updatedOrders) => {
  const userRes = await fetch(`${BASE_URL}/${userId}`)
  if (!userRes.ok) throw new Error('Failed to fetch user')
  const user = await userRes.json()

  let newScore = (user.score || 0) + 10
  if (newScore > 100) newScore = 0

  const res = await fetch(`${BASE_URL}/${userId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      orders: updatedOrders,
      score: newScore,
    }),
  })

  if (!res.ok) throw new Error('Failed to create order')
  return await res.json()
}

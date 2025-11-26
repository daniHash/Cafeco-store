import { swal } from '../utils/helper'
import Cookies from 'js-cookie'

const BASE_URL = 'http://localhost:3000/api/v2/auth'

export const login = async (body) => {
  const res = await fetch(`${BASE_URL}/register`, {
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

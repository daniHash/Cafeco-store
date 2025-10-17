const BASE_URL = 'http://localhost:3000/api/v2/user'

export const getUserProfile = async () => {
  const res = await fetch(`${BASE_URL}/profile`, {
    method: 'GET',
    credentials: 'include',
  })

  if (!res.ok) throw new Error('Failed to fetch profile')

  return res.json()
}

export const getUserCart = async () => {
  const res = await fetch(`${BASE_URL}/cart`, {
    method: 'GET',
    credentials: 'include',
  })

  if (!res.ok) throw new Error('Failed to fetch profile')

  return res.json()
}

export const getUserOrders = async () => {
  const res = await fetch(`${BASE_URL}/orders`, {
    method: 'GET',
    credentials: 'include',
  })

  if (!res.ok) throw new Error('Failed to fetch profile')

  return res.json()
}

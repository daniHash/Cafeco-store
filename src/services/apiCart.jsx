const BASE_URL = 'http://localhost:3000/api/v2/user/cart'

export const getUserCart = async () => {
  const res = await fetch('http://localhost:8000/cart')
  if (!res.ok) throw new Error('something was wrong')
  const data = await res.json()
  return data
}

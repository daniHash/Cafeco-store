const BASE_URL = 'http://localhost:3000/api/v2/admin/dashboard'

export const getDashboard = async () => {
  const res = await fetch(BASE_URL, {
    method: 'GET',
    credentials: 'include',
  })

  if (!res.ok) throw new Error('Failed to fetch profile')

  return res.json()
}

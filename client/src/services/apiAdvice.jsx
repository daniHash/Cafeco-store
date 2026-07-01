const BASE_URL = 'https://api.adviceslip.com/advice'

export const getAdvice = async () => {
  const res = await fetch(BASE_URL)
  if (!res.ok) throw new Error('something was wrong')
  const data = await res.json()
  return data
}

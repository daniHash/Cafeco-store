const BASE_URL = 'http://localhost:3000/api/v2/products'

export const getCofeProducts = async () => {
  const res = await fetch('http://localhost:8000/products')
  if (!res.ok) throw new Error('something was wrong')
  const data = await res.json()
  return data
}

export const getProduct = async (id) => {
  const res = await fetch(`${BASE_URL}/:${id}`)
  if (!res.ok) throw new Error('something was wrong')
  const data = await res.json()
  return data
}

export const createProduct = async (body) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
    credentials: 'include',
  })
  if (!res.ok) throw new Error('something was wrong')
  return res.json()
}

export const editProduct = async (id, body) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
    credentials: 'include',
  })
  if (!res.ok) throw new Error('something was wrong')
  return res.json()
}

export const editProductImage = async (id, imageFile) => {
  const formData = new FormData()
  formData.append('image', imageFile)

  const res = await fetch(`${BASE_URL}/${id}/image`, {
    method: 'PATCH',
    body: formData,
    credentials: 'include',
  })

  if (!res.ok) {
    throw new Error('Something went wrong while uploading the image')
  }

  return res.json()
}

export const deleteProduct = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  })
  if (!res.ok) throw new Error('something was wrong')
  return res.json()
}

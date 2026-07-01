const BASE_URL = 'http://localhost:8000/cart'

export const getUserCart = async () => {
  const res = await fetch(BASE_URL)
  if (!res.ok) throw new Error('Failed to fetch cart')
  return await res.json()
}

export const apiRemoveItem = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('failed to delete item')
  return true
}
export const apiAddItem = async (item) => {
  const cleanPrice = +item.price

  const newItem = {
    productId: item.productId,
    image: item.image,
    title: item.title,
    price: cleanPrice,
    quantity: Number(1),
    totalprice: cleanPrice,
  }

  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newItem),
  })

  if (!res.ok) throw new Error('failed to add item')
  return await res.json()
}

export const apiIncreaseItem = async (id) => {
  const item = await fetch(`${BASE_URL}/${id}`).then((r) => r.json())

  const updated = {
    ...item,
    quantity: item.quantity + 1,
    totalprice: (item.quantity + 1) * item.price,
  }

  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updated),
  })
  if (!res.ok) throw new Error('failed increase item')
  return updated
}

export const apiDecreaseItem = async (id) => {
  const item = await fetch(`${BASE_URL}/${id}`).then((r) => r.json())

  if (item.quantity <= 1) {
    await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' })
    return 'deleted'
  }

  const updated = {
    ...item,
    quantity: item.quantity - 1,
    totalprice: (item.quantity - 1) * item.price,
  }

  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updated),
  })

  if (!res.ok) throw new Error('failed decrease item')
  return updated
}

export const apiClearCart = async () => {
  const all = await fetch(BASE_URL).then((r) => r.json())

  await Promise.all(
    all.map((item) =>
      fetch(`${BASE_URL}/${item.id}`, {
        method: 'DELETE',
      })
    )
  )

  return true
}

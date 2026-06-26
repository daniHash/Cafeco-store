import { useDispatch, useSelector } from 'react-redux'
import {
  addItem,
  addItemAsync,
  increaseAsync,
  increaseItemQuantity,
  decreaseAsync,
  decreaseItemQuantity,
} from '../features/cart/cartSlice'
import { notify } from '../utils/helper'
import Cookies from 'js-cookie'

const useCartItem = (item) => {
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.cart)

  if (!item) {
    return {
      cartItem: null,
      add: () => {},
      increase: () => {},
      decrease: () => {},
    }
  }

  const cartItem =
    cart.find((p) => p.productId === item.id) ||
    cart.find((p) => p.id === item.id)
  const token = Cookies.get('token')
  const handleAuthCheck = () => {
    if (!token) {
      notify('error', 'Please login to continue')
      return false
    }
    return true
  }

  const add = () => {
    if (!handleAuthCheck()) return

    const newItem = {
      productId: item.id,
      image: item.image,
      price: item.price,
      title: item.title,
      quantity: 1,
      totalprice: item.price,
    }

    dispatch(addItemAsync(newItem))
      .unwrap()
      .then((savedItem) => dispatch(addItem(savedItem)))
      .catch(() => notify('error', 'Try again later'))
  }

  const increase = () => {
    if (!cartItem) return

    if (!handleAuthCheck()) return
    dispatch(increaseAsync(cartItem.id))
      .unwrap()
      .then(() => dispatch(increaseItemQuantity(cartItem.id)))
      .catch(() => notify('error', 'Try again later'))
  }

  const decrease = () => {
    if (!cartItem) return

    if (!handleAuthCheck()) return
    dispatch(decreaseAsync(cartItem.id))
      .unwrap()
      .then(() => dispatch(decreaseItemQuantity(cartItem.id)))
      .catch(() => notify('error', 'Try again later'))
  }

  return {
    cartItem,
    add,
    increase,
    decrease,
  }
}
export default useCartItem

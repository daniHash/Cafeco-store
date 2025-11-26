import { useDispatch, useSelector } from 'react-redux'
import {
  addItem,
  addItemAsync,
  increaseAsync,
  increaseItemQuantity,
  decreaseAsync,
  decreaseItemQuantity,
} from '../features/cart/cartSlice'
import Cookies from 'js-cookie'
import { notify } from '../utils/helper'

const useCartItem = (item) => {
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.cart)

  const cartItem = cart.find((p) => p.id === item.id)
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
      id: item.id,
      image: item.image,
      price: item.price,
      quantity: 1,
      title: item.title,
      totalprice: item.price,
    }
    dispatch(addItem(newItem))
    dispatch(addItemAsync(newItem))
  }

  const increase = () => {
    if (!handleAuthCheck()) return

    dispatch(increaseItemQuantity(cartItem.id))
    dispatch(increaseAsync(cartItem.id))
  }

  const decrease = () => {
    if (!handleAuthCheck()) return

    dispatch(decreaseItemQuantity(cartItem.id))
    dispatch(decreaseAsync(cartItem.id))
  }

  return {
    cartItem,
    add,
    increase,
    decrease,
  }
}
export default useCartItem

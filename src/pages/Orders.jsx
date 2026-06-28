import { useSelector } from 'react-redux'

const Orders = () => {
  const { orders } = useSelector((state) => state.user.user)
  console.log(orders)
  return <div>Orders</div>
}

export default Orders

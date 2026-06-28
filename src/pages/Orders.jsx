import { useSelector } from 'react-redux'
import { FiMapPin, FiCalendar } from 'react-icons/fi'
import OrderItem from '../features/auth/OrderItem'
import Loader from '../ui/Loader'

const Orders = () => {
  const user = useSelector((state) => state.user.user)

  if (!user) {
    return <Loader />
  }

  const { orders } = user

  if (!orders.length)
    return (
      <div className="mt-40 flex flex-col items-center gap-5">
        <img src="/images/empty-order.png" className="w-64" alt="" />

        <h2 className="font-titr text-3xl text-white">No Orders Yet</h2>

        <p className="font-text text-white">
          Looks like you haven't ordered any coffee yet.
        </p>
      </div>
    )

  return (
    <section className="mx-auto h-full max-w-5xl overflow-auto px-5">
      <div className="mb-14 text-center">
        <h1 className="text-center font-titr text-xl text-white lg:text-4xl">
          Orders
        </h1>
        <p className="mt-3 font-text text-white">
          Track all your previous coffee orders.
        </p>
      </div>

      <div className="space-y-8 overflow-auto">
        {orders
          .slice()
          .reverse()
          .map((order) => {
            const total = order.cart.reduce(
              (sum, item) => sum + item.totalprice,
              0
            )

            return <OrderItem order={order} total={total} key={order.id} />
          })}
      </div>
    </section>
  )
}

export default Orders

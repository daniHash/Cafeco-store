import { FiCalendar } from 'react-icons/fi'
import { formatCurrency } from '../../utils/helper'

const OrderItem = ({ order, total }) => {
  return (
    <div
      key={order.id}
      className="rounded-3xl bg-accent-300 p-8 shadow-form transition duration-300 hover:shadow-xl"
    >
      <div>
        <h2 className="font-titr text-2xl text-dark-500">Order #{order.id}</h2>

        <div className="mt-3 flex gap-6 text-dark-400">
          <span className="flex items-center gap-2">
            <FiCalendar />

            {new Date(order.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>

      <div className="mt-8 divide-y">
        {order.cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <img src={item.image} className="h-14 w-14" alt="" />

              <div className="flex items-center justify-center gap-2">
                <h3 className="font-semibold">{item.title}</h3>
                <div className="flex items-center justify-center rounded-full bg-primary-500 px-1.5 font-titr text-sm text-white">
                  {item.quantity}
                </div>
              </div>
            </div>

            <h3 className="font-bold">{formatCurrency(item.totalprice)}</h3>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between">
        <h2 className="font-titr text-2xl text-primary-500">
          Total : {formatCurrency(total)}
        </h2>
        <span className="rounded-full bg-green-100 px-5 py-2 font-bold text-green-700">
          Completed
        </span>
      </div>
    </div>
  )
}

export default OrderItem

import { FiCalendar } from 'react-icons/fi'
import { formatCurrency } from '../../utils/helper'

const OrderItem = ({ order, total }) => {
  return (
    <div
      key={order.id}
      className="rounded-3xl bg-accent-300 p-2 shadow-form transition duration-300 hover:shadow-xl md:p-8 lg:p-8"
    >
      <div>
        <h2 className="font-titr text-xl text-dark-500 md:text-2xl lg:text-2xl">
          Order #{order.id}
        </h2>

        <div className="mt-1 flex gap-6 text-dark-400 md:mt-3 md:text-2xl lg:mt-3 lg:text-2xl">
          <span className="flex items-center gap-2">
            <FiCalendar />

            {new Date(order.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>

      <div className="mt-2 divide-y md:mt-8 lg:mt-8">
        {order.cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between py-2 md:py-4 lg:py-4"
          >
            <div className="flex items-center gap-2 md:gap-4 lg:gap-4">
              <img
                src={item.image}
                className="hidden h-14 w-14 md:block lg:block"
                alt=""
              />

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

      <div className="mt-6 flex flex-col justify-between gap-2 md:flex-row md:gap-0 lg:flex-row lg:gap-0">
        <h2 className="font-titr text-xl text-primary-500 md:text-2xl lg:text-2xl">
          Total : {formatCurrency(total)}
        </h2>
        <span className="flex items-center justify-center rounded-full bg-green-100 px-1.5 py-0 font-bold text-green-700 md:px-5 md:py-2 lg:px-5 lg:py-2">
          Completed
        </span>
      </div>
    </div>
  )
}

export default OrderItem

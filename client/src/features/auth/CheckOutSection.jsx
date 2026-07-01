// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { formatCurrency, notify } from '../../utils/helper'
import { useEffect, useState } from 'react'
import { pdf, PDFDownloadLink } from '@react-pdf/renderer'
import { createOrderFetch, resetScore } from './authSlice'
import { clearCartAsync, resetCart } from '../cart/cartSlice'
import InvoicePDF from '../../ui/InvoicePDF'
import Button from '../../ui/Button'
import AddressDropdown from '../cart/AddressDropdown'

const CheckOutSection = () => {
  const [address, setAddress] = useState('')
  const { cart } = useSelector((state) => state.cart)
  const [isOpen, setIsOpen] = useState(false)
  const { score } = useSelector((state) => state.user.user)
  const dispatch = useDispatch()

  useEffect(() => {
    if (score > 100) dispatch(resetScore())
  }, [dispatch, score])

  const totalPrice = cart.reduce((prev, curr) => {
    return prev + curr.totalprice
  }, 0)

  const discount = score === 100 ? 0.15 : 0
  const discountedPrice = totalPrice * (1 - discount)

  const handleSubmit = async () => {
    if (!address) {
      notify('error', 'Please select an address before proceeding!')
      return
    }

    const order = {
      address,
      cart,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    }

    try {
      await dispatch(createOrderFetch(order)).unwrap()

      const blob = await pdf(
        <InvoicePDF
          orderId={order.id}
          cart={cart}
          address={address}
          totalPrice={discountedPrice}
          originalPrice={totalPrice}
          discount={discount}
        />
      ).toBlob()

      const url = URL.createObjectURL(blob)

      const a = document.createElement('a')
      a.href = url
      a.download = `order-${order.id}.pdf`
      a.click()

      URL.revokeObjectURL(url)

      await dispatch(clearCartAsync()).unwrap()
      dispatch(resetCart())

      notify('success', 'Order created successfully! 🛍️')
      setIsOpen(false)
    } catch {
      notify('error', 'Try again later')
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mt-20 mb-20 h-auto w-full rounded-xl bg-[#D5B690]/65 shadow-form shadow-black/20"
      >
        <div className="mt-20 flex w-full items-center justify-center gap-20 md:gap-40 lg:gap-72">
          <div className="">
            <h2 className="text-center font-titr text-xl text-dark-500 md:text-2xl lg:text-4xl">
              Shipping
            </h2>
            <h3 className="mt-10 text-center font-titr text-lg text-dark-500 lg:text-[28px]">
              Free
            </h3>
          </div>
          <div className="">
            <h2 className="text-center font-titr text-xl text-dark-500 md:text-2xl lg:text-4xl">
              Sub total
            </h2>
            <h3 className="mt-10 text-center font-titr text-lg text-dark-500 lg:text-[28px]">
              {formatCurrency(totalPrice)}
            </h3>
          </div>
        </div>
        <div className="">
          <h2 className="mt-16 w-full text-center font-titr text-2xl text-destructive-300 md:text-2xl lg:text-4xl">
            Total
          </h2>
          <h3 className="mt-10 text-center font-titr text-lg text-destructive-300 lg:text-[28px]">
            {discount > 0 ? (
              <span>
                <span className="mr-2 line-through opacity-50">
                  {formatCurrency(totalPrice)}
                </span>
                <span>{formatCurrency(discountedPrice)}</span>
              </span>
            ) : (
              formatCurrency(totalPrice)
            )}
          </h3>
        </div>
        <div className="mt-20 mb-5 flex w-full justify-center">
          <Button classType="primary" px={20} onClick={() => setIsOpen(true)}>
            Chekout{' '}
            <span className="ml-20">
              {discount > 0 ? (
                <span>
                  <span className="mr-2 line-through opacity-50">
                    {formatCurrency(totalPrice)}
                  </span>
                  <span>{formatCurrency(discountedPrice)}</span>
                </span>
              ) : (
                formatCurrency(totalPrice)
              )}
            </span>
          </Button>
        </div>
      </motion.div>
      {isOpen && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="flex w-11/12 max-w-md flex-col gap-4 rounded-2xl border border-white/20 bg-white/15 p-8 backdrop-blur-lg"
            >
              <h2 className="text-xl font-bold text-white">
                Choose your address
              </h2>

              <AddressDropdown
                address={address}
                onSelect={(value) => setAddress(value)}
              />

              <div className="mt-2 flex justify-end gap-3">
                <Button
                  classType="delete"
                  onClick={() => {
                    setIsOpen(false)
                    setAddress('')
                  }}
                >
                  Cancel
                </Button>
                <Button classType="edit" onClick={handleSubmit}>
                  Payment {formatCurrency(totalPrice)}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  )
}

export default CheckOutSection

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CartCard from '../component/cartCart/CartCard'
import { clearAll } from '../redux/features/btnBuy/btnBuy'

const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { cartList = [], totalItem = 0, totalPrice = 0 } = useSelector(
    (store) => store.cart || {}
  )

  function hendalcart() {
    dispatch(clearAll())
    navigate('/checkout')
  }

  return (
    <>
      <div className='flex flex-wrap justify-center gap-4 px-4 py-4 pb-24 sm:gap-6 sm:px-6 md:gap-8 lg:gap-10 lg:px-8 xl:gap-12'>
        {Array.isArray(cartList) &&
          cartList.map((product, idx) => (
            <CartCard key={product?.id || idx} product={product} idx={idx} />
          ))}
      </div>

      <div className='fixed bottom-0 z-10 flex w-full flex-wrap items-center justify-center gap-3 bg-gray-100 px-4 py-3 shadow-md sm:gap-6 sm:px-6 md:gap-8 lg:gap-10'>
        <h1 className='text-sm font-bold sm:text-base md:text-lg xl:text-xl'>
          Total Items: {Number(totalItem)}
        </h1>

        <h1 className='text-sm font-bold sm:text-base md:text-lg xl:text-xl'>
          Total Price: ₹{totalPrice}
        </h1>

        <button
          onClick={hendalcart}
          className='rounded bg-blue-500 px-4 py-2 text-xs font-bold text-white sm:text-sm md:px-5 md:py-2.5'
        >
          Checkout
        </button>
      </div>
    </>
  )
}

export default Cart
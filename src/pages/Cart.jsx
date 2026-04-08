import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CartCard from '../component/cartCart/CartCard'
import { clearAll } from '../redux/features/btnBuy/btnBuy'

const Cart = () => {
  const dispatch = useDispatch()
  const { cartList, totalItem, totalPrice } = useSelector((store) => store.cart)
  const navigate = useNavigate()

  function hendalcart() {
    dispatch(clearAll())
    navigate(`/checkout`)
  }

  return (
    <>
      <div className='flex flex-wrap justify-center gap-4 px-4 py-4 sm:gap-6 sm:px-6 md:gap-8 lg:gap-10 lg:px-8 xl:gap-12'>
        {cartList.map((product, idx) =>
          <CartCard key={product.id} product={product} idx={idx} />
        )}
      </div>

      <div className='fixed bottom-0 z-10 flex w-full flex-wrap items-center justify-center gap-3 bg-gray-100 px-4 py-3 shadow-md sm:gap-6 sm:px-6 md:gap-8 lg:gap-10'>
        <h1 className='text-sm font-bold sm:text-base md:text-lg xl:text-xl'>
          Total Item's: {totalItem}
        </h1>

        <h1 className='text-sm font-bold sm:text-base md:text-lg xl:text-xl'>
          Total Price's: ₹{totalPrice.toFixed(2)}
        </h1>

        <button onClick={hendalcart}>
          <h1 className='rounded bg-blue-500 px-4 py-2 text-xs font-bold text-white sm:text-sm md:px-5 md:py-2.5'>
            Checkout
          </h1>
        </button>
      </div>
    </>
  )
}

export default Cart
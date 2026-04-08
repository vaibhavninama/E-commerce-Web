import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice'
import cartReducer from './features/cart/cartSlice'
import categoryReducer from './features/filters/filtersSlice'
import btnBuyReducer from './features/btnBuy/btnBuy'
const savedAuth = localStorage.getItem('auth')

const preloadedState = {
  auth: savedAuth ? JSON.parse(savedAuth) : undefined,
}

const Store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    category:categoryReducer,
    btnBuy:btnBuyReducer
  },
  preloadedState
})

Store.subscribe(() => {
  const state = Store.getState()

  localStorage.setItem('auth', JSON.stringify(state.auth))

  const userID = state.auth.user?.uid
  if (userID) {
    localStorage.setItem(`cart_${userID}`, JSON.stringify(state.cart))
  }
})

export default Store
import { createSlice } from '@reduxjs/toolkit'
import { convertToRupees } from '../../../component/RupeesConvter/Conveter'

const initialState = {
  cartList: [],
  totalItem: 0,
  totalPrice: 0
}

const updateCartTotals = (state) => {
  state.totalItem = state.cartList.reduce((total, item) => {
    return total + (Number(item.quality) || 0)
  }, 0)

  state.totalPrice = state.cartList.reduce((total, item) => {
    const price = convertToRupees(item.price)
    const quantity = Number(item.quality) || 1
    return total + price * quantity
  }, 0)
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      const product = action.payload
      const existProduct = state.cartList.find((item) => item.id === product.id)

      if (existProduct) {
        existProduct.quality += Number(product.quality) || 1
      } else {
        state.cartList.push({
          ...product,
          quality: Number(product.quality) || 1
        })
      }

      updateCartTotals(state)
    },

    removeCart: (state, action) => {
      const id = action.payload
      state.cartList = state.cartList.filter((item) => item.id !== id)
      updateCartTotals(state)
    },

    deecresQuleity: (state, action) => {
      const id = action.payload
      const item = state.cartList.find((item) => item.id === id)

      if (!item) return

      if (item.quality > 1) {
        item.quality -= 1
      } else {
        state.cartList = state.cartList.filter((item) => item.id !== id)
      }

      updateCartTotals(state)
    },

    inncerssQuleity: (state, action) => {
      const id = action.payload
      const item = state.cartList.find((item) => item.id === id)

      if (!item) return

      item.quality += 1
      updateCartTotals(state)
    },

    setCart: (state, action) => {
      state.cartList = Array.isArray(action.payload?.cartList)
        ? action.payload.cartList
        : []

      updateCartTotals(state)
    },

    clearCart: (state) => {
      state.cartList = []
      state.totalItem = 0
      state.totalPrice = 0
    }
  }
})

export const {
  addCart,
  removeCart,
  deecresQuleity,
  inncerssQuleity,
  setCart,
  clearCart
} = cartSlice.actions

export default cartSlice.reducer
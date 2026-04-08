import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartList: [],
  totalItem: 0,
  totalPrice: 0
}

const updateCartTotals = (state) => {
  state.totalItem = state.cartList.reduce((total, item) => {
    return total + (Number(item.quality) || 0)
  }, 0)

  state.totalPrice = Number(
    state.cartList.reduce((total, item) => {
      const finalPrice =
       2 * Number(item.price) - (Number(item.price) * Number(item.discountPercentage) / 100)

      return total + finalPrice * (Number(item.quality) || 0)
    }, 0).toFixed(2)
  )
}

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,

  reducers: {
    addCart: (state, action) => {
      const product = action.payload

      const existProduct = state.cartList.find((item) => item.id === product.id)

      if (existProduct) {
        existProduct.quality += Number(product.quality) || 0
      } else {
        state.cartList.push({
          ...product,
          quality: Number(product.quality) || 1
        })
      }

      updateCartTotals(state)
    },

    deecresQuleity: (state, action) => {
      const id = action.payload
      const item = state.cartList.find((item) => item.id === id)

      if (item) {
        if (item.quality > 1) {
          item.quality -= 1
        } else {
          state.cartList = state.cartList.filter((item) => item.id !== id)
        }
      }

      updateCartTotals(state)
    },

    inncerssQuleity: (state, action) => {
      const id = action.payload
      const item = state.cartList.find((item) => item.id === id)

      if (item) {
        item.quality += 1
      }

      updateCartTotals(state)
    },

    removeCart: (state, action) => {
      const id = action.payload
      state.cartList = state.cartList.filter((item) => item.id !== id)

      updateCartTotals(state)
    },

    setCart: (state, action) => {
      state.cartList = action.payload.cartList || []
      state.totalItem = action.payload.totalItem || 0
      state.totalPrice = action.payload.totalPrice || 0
    }
  }
})

export const { addCart, removeCart, deecresQuleity, inncerssQuleity, setCart } = cartSlice.actions
export default cartSlice.reducer
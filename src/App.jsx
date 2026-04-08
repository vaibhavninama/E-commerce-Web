import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer, Bounce } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'

import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import Profile from "./pages/Profile"
import MainLayout from './component/MainLayout'
import Category from './pages/Categorypd'
import { setCart } from './redux/features/cart/cartSlice'
import ProtectedRoute from './pages/ProtectedRoute'
import Checkout from './pages/Checkout'
import Payment from './pages/PaymentPage'
import PaymentSuccess from './pages/PaymentSuccess'

const App = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((store) => store.auth)

  useEffect(() => {
    const userID = user?.uid

    if (userID) {
      const savedCart = localStorage.getItem(`cart_${userID}`)

      if (savedCart) {
        dispatch(setCart(JSON.parse(savedCart)))
      } else {
        dispatch(
          setCart({
            cartList: [],
            totalItem: 0,
            totalPrice: 0
          })
        )
      }
    } else {
      dispatch(
        setCart({
          cartList: [],
          totalItem: 0,
          totalPrice: 0
        })
      )
    }
  }, [dispatch, user])

  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<Products />} />
          <Route path="/category/:name" element={<Category />} />
          
            <Route path="/products/:id" element={<ProtectedRoute> <ProductDetails /> </ProtectedRoute>} />
           <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
            <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
            <Route path="/paymentsuccess" element={<ProtectedRoute><PaymentSuccess /></ProtectedRoute>} />
          <Route path="/cart" element={  <Cart />} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        </Route>
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  )
}

export default App
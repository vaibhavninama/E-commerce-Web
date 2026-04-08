import React, { useState } from 'react'
import icon from '../../asscent/icon/add-to-cart.png'
import icon2 from '../../asscent/icon/student.png'
import icon3 from '../../asscent/icon/user.png'
import logo from '../../asscent/icon/Untitled design.png'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/features/auth/authSlice'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
  const dispatch = useDispatch()
  const { isLoggedIn, user } = useSelector((store) => store.auth)
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  function logOut() {
    dispatch(logout())
    setIsOpen(false)
  }

  const navLinks = [
    { name: 'Product', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      
      {/* TOP NAV */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} className="h-7" />
          <span className="text-lg font-bold">Shopix</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition ${
                location.pathname === link.path
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-4">

          {/* CART */}
          <Link to="/cart" className="h-9 w-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition">
            <img src={icon} alt="cart" className="h-5 w-5" />
          </Link>

          {/* PROFILE IMAGE */}
          <Link to="/profile" className="h-10 w-10 rounded-full overflow-hidden ring-2 ring-gray-200">
            <img
              src={isLoggedIn ? user?.photo || icon2 : icon3}
              alt="profile"
              onError={(e) => {
                e.target.src = isLoggedIn ? icon2 : icon3
              }}
              className="h-full w-full object-cover"
            />
          </Link>

          {/* LOGIN / LOGOUT */}
          {isLoggedIn ? (
            <button
              onClick={logOut}
              className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
            >
              Login
            </Link>
          )}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden h-10 w-10 flex items-center justify-center border rounded-lg"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-white border-t">

          {/* PROFILE */}
          <div className="flex items-center gap-3 py-4 border-b">
            <div className="h-12 w-12 rounded-full overflow-hidden">
              <img
                src={isLoggedIn ? user?.photo || icon2 : icon3}
                alt="profile"
                onError={(e) => {
                  e.target.src = isLoggedIn ? icon2 : icon3
                }}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-sm font-semibold">
                {isLoggedIn ? user?.displayName : 'Guest User'}
              </h2>
              <p className="text-xs text-gray-500">
                {isLoggedIn ? user?.email : 'Please login'}
              </p>
            </div>
          </div>

          {/* LINKS */}
          <div className="flex flex-col gap-2 mt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="flex gap-3 mt-4">

            <Link
              to="/cart"
              onClick={() => setIsOpen(false)}
              className="flex-1 bg-gray-100 py-3 rounded-lg flex items-center justify-center gap-2"
            >
              <img src={icon} className="h-5 w-5" />
              Cart
            </Link>

            {isLoggedIn ? (
              <button
                onClick={logOut}
                className="flex-1 bg-red-500 text-white py-3 rounded-lg"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg text-center"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nav
import React from 'react'

const CheckoutCard = ({ item }) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <p> ₹{(item.price*2-(item.price*2*(item.discountPercentage/100))).toFixed(2)}</p>
    </div>
  )
}

export default CheckoutCard
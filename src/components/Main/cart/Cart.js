import React from 'react'
import { useCartContex } from "../../../context/CartContext";

function Cart() {

  const { cartList, clearCart, isIncart } = useCartContex()

  console.log(cartList)
  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <button onClick={clearCart}>Clear Cart</button>
</div>

</>
  )
}

export default Cart
import React from 'react'
import { useCartContex } from '../../context/CartContext';

function CartWidget() {
  const {cantidadTotalItem} = useCartContex()
  return (
    <>
    <span className="material-icons">
shopping_cart
</span>
<span className='cart-counter'>{cantidadTotalItem() !== 0 && cantidadTotalItem()}</span>
</>
  )
}

export default CartWidget
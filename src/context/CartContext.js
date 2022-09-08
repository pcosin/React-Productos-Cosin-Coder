import {React, createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContex = () =>useContext(CartContext)



function CartContextProvider({children}) {
    const [cartList, setCarList] = useState([])

    const agregarCart = (item) => {
        let ix = cartList.findIndex(el => el.id = item.id)
        if(ix !== -1) {
             cartList[ix].qty += item.cantidad
          }  else {      
      setCarList( [ ...cartList, item ] )
  }}


    const isInCart = (item) => {
        return cartList.find((x) => x.id === item.id) 
     }

    const clearCart =() => {
        setCarList([])
    }


    const removeItem = (id) => {
      setCarList (cartList.filter(item => item.id !== id))
    }

    return (
        <CartContext.Provider value={{cartList, agregarCart, clearCart, removeItem,isInCart}} >
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider
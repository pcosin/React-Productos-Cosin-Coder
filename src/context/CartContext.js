import {React, createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContex = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
    const [cartList, setCarList] = useState([])

    const addToCart = (item, cantidad) => {
        if(isInCart(item)) {
            console.log("true")

        }
        else{
            console.log("false")
        }

         
      setCarList( [ ...cartList, {...item, cantidad} ] )
  }


    const isInCart = (item) => {
        return cartList.find((element) => element.id === item.id) 
     }

    const clearCart =() => {
        setCarList([])
    }


    // const removeItem = (id) => {
    //   setCarList (cartList.filter(item => item.id !== id))
    // }

    return (
        <CartContext.Provider value={{cartList, addToCart, clearCart, isInCart}} >
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider
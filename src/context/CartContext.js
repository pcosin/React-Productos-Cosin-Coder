import { React, createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContex = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCarList] = useState([]);

  const addToCart = (item, cantidad) => {
    if (isInCart(item.id)) {
      sumarCantidad(item, cantidad);
    } else {
      setCarList([...cartList, { ...item, cantidad }]);
    }
  };

  const sumarCantidad = (item, cantidad) => {
    const carritoActulizado = cartList.map((prod) => {
      if (prod.id === item.id) {
        const productoActualizado = {
          ...prod,
          cantidad: prod.cantidad + cantidad,
        };
        return productoActualizado;
      } else {
        return prod;
      }
    });
    setCarList(carritoActulizado);
  };

  const isInCart = (id) => {
    return cartList.some((prod) => prod.id === id);
  };

  const clearCart = () => {
    setCarList([]);
  };

  const removeItem = (id) => {
    setCarList(cartList.filter((item) => item.id !== id));
  };
  const cantidadTotalItem = () => {
    return cartList.reduce((acum, prod) => (acum += prod.cantidad), 0);
  };

  const totalPrice = () => {
    return cartList.reduce(
      (acum, prod) => acum + prod.cantidad * prod.precio,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        clearCart,
        isInCart,
        removeItem,
        cantidadTotalItem,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

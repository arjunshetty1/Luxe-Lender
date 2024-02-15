"use client";
import { createContext, useState } from "react";

export const CartItemsContext = createContext();

const CartContext = ({ children }) => {
  const [cart, setcart] = useState([]);

  const Cartitems = (product) => {
    setcart((prevCart) => [...prevCart, product]);
    console.log(cart);
  };

  const DeleteCartItems = (i) => {
    
  }

  const context = { cart, setcart, Cartitems };
  return (
    <CartItemsContext.Provider value={context}>
      {children}
    </CartItemsContext.Provider>
  );
  ("");
};

export default CartContext;

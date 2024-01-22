"use client";
import { createContext, useState } from "react";
import Cart from "./Components/Cart";

export const CartItemsContext = createContext();

const CartContext = () => {
  const [cartitems, setcartitems] = useState(2);
  return (
    <CartItemsContext.Provider value={cartitems}>
      <Cart />
    </CartItemsContext.Provider>
  );
};

export default CartContext;

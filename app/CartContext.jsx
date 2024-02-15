"use client";
import { createContext, useState } from "react";

export const CartItemsContext = createContext();

const CartContext = ({ children }) => {
  const [cart, setcart] = useState([]);

  const Cartitems = (product) => {
    const isThere = cart.some((item) => {
      return item.productId === product.productId;
    });

    if (!isThere) {
      setcart((prevCart) => [...prevCart, product]);
      console.log(cart);
    } else {
      alert("Product is already added to the cart");
    }
  };

  const DeleteCartItems = (id) => {
    const deleteUpdatedArray = cart.filter((item) => {
      return item.productId !== id;
    });
    setcart(deleteUpdatedArray);
  };

  const context = { cart, setcart, Cartitems, DeleteCartItems };
  return (
    <CartItemsContext.Provider value={context}>
      {children}
    </CartItemsContext.Provider>
  );
  ("");
};

export default CartContext;

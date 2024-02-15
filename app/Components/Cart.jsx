"use client";
import { useContext } from "react";
import { CartItemsContext } from "../CartContext";
import Wrapper from "./Wrapper";

const Cart = () => {
  const { cart, DeleteCartItems } = useContext(CartItemsContext);
  console.log("here is the cart", cart);

  const deleteHandler = (id) => {
    console.log("here is the i", id);
    DeleteCartItems(id);
  };

  const SubTotalCost = cart.reduce((accumalator, currentValue) => {
    return accumalator + currentValue.productPrice;
  }, 0);
  
  let Total = 0;
  if (SubTotalCost > 0) {
    Total = SubTotalCost + 49;
  }

  return (
    <Wrapper>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
          <div className="mb-6 sm:mb-10 lg:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Your Cart
            </h2>
          </div>
          {cart.map((item, i) => {
            return (
              <div
                key={item.id}
                className="mb-6 flex flex-col gap-4 sm:mb-8 md:gap-6"
              >
                <div className="flex flex-wrap gap-x-4 overflow-hidden rounded-lg border sm:gap-y-4 lg:gap-6">
                  <a
                    href="#"
                    className="group relative block h-48 w-32 overflow-hidden bg-gray-100 sm:h-56 sm:w-40"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1531938716357-224c16b5ace3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      loading="lazy"
                      alt="Photo by Thái An"
                      className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                  </a>

                  <div className="flex flex-1 flex-col justify-between py-4">
                    <div>
                      <a
                        href="#"
                        className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                      >
                        {item.productName}
                      </a>

                      <span className="block text-gray-500">
                        From {item.StartDate}
                      </span>
                      <span className="block text-gray-500">
                        To {item.enddate}
                      </span>
                    </div>

                    <div>
                      <span className="mb-1 block font-bold text-gray-800 md:text-lg">
                        ₹{item.productPrice}
                      </span>

                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        In stock
                      </span>
                    </div>
                  </div>

                  <div className="flex w-full justify-between border-t p-4 sm:w-auto sm:border-none sm:pl-0 lg:p-6 lg:pl-0">
                    <div className="flex relative top-[0.7rem] flex-col items-start gap-2">
                      <button
                        onClick={() => deleteHandler(item.productId)}
                        className="select-none text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                      >
                        Delete
                      </button>
                    </div>

                    <div className="ml-4 pt-3 md:ml-8 md:pt-2 lg:ml-16">
                      <span className="block font-bold text-gray-800 md:text-lg">
                        ₹{item.productPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="flex flex-col items-end gap-4">
            <div className="w-full rounded-lg bg-gray-100 p-4 sm:max-w-xs">
              <div className="space-y-1">
                <div className="flex justify-between gap-4 text-gray-500">
                  <span>Subtotal</span>
                  <span>{SubTotalCost}</span>
                </div>

                <div className="flex justify-between gap-4 text-gray-500">
                  <span>Shipping</span>
                  <span>₹49</span>
                </div>
              </div>

              <div className="mt-4 border-t pt-4">
                <div className="flex items-start justify-between gap-4 text-gray-800">
                  <span className="text-lg font-bold">Total</span>

                  <span className="flex flex-col items-end">
                    <span className="text-lg font-bold">{Total}</span>
                    <span className="text-sm text-gray-500">including GST</span>
                  </span>
                </div>
              </div>
            </div>

            <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
              Check out
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cart;

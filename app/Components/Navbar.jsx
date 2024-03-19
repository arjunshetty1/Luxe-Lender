"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useContext } from "react";
import { CartItemsContext } from "../CartContext";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const { cart } = useContext(CartItemsContext);

  return (
    <>
      <div className="bg-white lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-8 ">
          <header className="flex items-center justify-between py-4 md:py-8">
            <a
              href="/"
              className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
              aria-label="logo"
            >
              <svg
                width="95"
                height="94"
                viewBox="0 0 95 94"
                className="h-auto w-6 text-indigo-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M96 0V47L48 94H0V47L48 0H96Z" />
              </svg>
              Luxe Lender
            </a>

            <div className="-ml-8   gap-2.5   flex justify-start">
              <Link href="/Cart" className="group -m-2 flex items-center p-2">
                <ShoppingBagIcon
                  className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="ml-2 text-lg font-medium text-red-700 group-hover:text-gray-800">
                  {cart.length}
                </span>
                <span className="sr-only">items in cart, view bag</span>
              </Link>

              <UserButton afterSignOutUrl="/" />
            </div>

            {/* <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              Menu
            </button> */}
          </header>
        </div>
      </div>
    </>
  );
};

export default Navbar;

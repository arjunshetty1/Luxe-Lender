"use client";
import { Toaster } from "sonner";
import { useContext, useState } from "react";
import DatePickerUi from "./DatePickerUi";
import { format } from "date-fns";
import { CartItemsContext } from "../CartContext";
import Image from "next/image";
import Link from "next/link";

const Card = ({ item }) => {
  const { Cartitems } = useContext(CartItemsContext);
  const [startDate, setStartDate] = useState(new Date("2024/01/09"));
  const [endDate, setEndDate] = useState(new Date("2024/01/09"));

  const start = format(startDate, "yyyy-MM-dd");
  const end = format(endDate, "yyyy-MM-dd");

  const [send, setsend] = useState({
    productName: item.productName,
    productPrice: item.price,
    productId: item.id,
    StartDate: start,
    enddate: end,
    Image: item.image[0].url,
  });

  const addToCart = () => {
    Cartitems(send);
  };

  return (
    <>
      <div
        className="card sm:ml-0 ml-[0.7rem] bg-[#fafafa] mt-8 sm:mt-2 md:w-[26rem] sm:w-[15rem] w-[10rem] sm:h-full h-[20rem] shadow-xl transition ease-in-out delay-150 
       hover:-translate-y-1 hover:scale-110 hover:text-black  hover:bg-slate-50 hover:outline 
       hover:outline-3 hover:outline-offset-2 hover:duration-200"
      >
        <figure>
          <Image
            src={item.image[0].url}
            width={500}
            height={500}
            quality={100}
            alt="Product Image"
            className=" rounded-mdw-[18rem] h-64 "
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title h-0 md:h-full sm:text-lg text-[15px] font-mono leading-4 text-black">
            {item.productName}
          </h2>

          <div className="card-actions flex justify-between items-center">
            <h2 className="font-medium mt-6 sm:mt-4 sm:mb-3 mb-2 sm:text-md text-sm text-[#1f1e1e]">
              ₹{item.price}/Per Day
            </h2>

            <Link
              href=""
              onClick={() => document.getElementById(item.id).showModal()}
              className="inline-block rounded-lg  hover:bg-indigo-700  bg-indigo-600 px-6 py-2 text-center text-[13px] font-semibold text-white outline-none ring-indigo-300 transition duration-100  focus-visible:ring active:bg-gray-200 "
            >
              View
            </Link>

            <div className="px-6  md:px-0">
              <dialog key={item.id} id={item.id} className="modal text-white">
                <div className="modal-box bg-[#fafafa]  max-w-[19rem] max-h-[27rem] md:max-h-full md:min-w-[50rem]  lg:min-w-[70rem] p-15">
                  <button
                    onClick={() => document.getElementById(item.id).close()}
                    className="absolute top-4 right-6 text-lg md:text-2xl cursor-pointer text-black"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </button>
                  <div className="md:flex md:flex-row flex-col gap-14 mt-12 ">
                    <div>
                      <Image
                        src={item.image[0].url}
                        width={1000}
                        height={1000}
                        className="rounded-lg left h-[20rem] w-50 md:w-80"
                        alt="ProductImage"
                      />
                    </div>
                    <div className="right flex mt-10 md:mt-0 flex-col gap-1  w-1/2">
                      <p className=" text-black whitespace-nowrap uppercase md:text-lg text-md font-mono font-medium">
                        {item.productName}
                      </p>
                      <DatePickerUi
                        startDate={startDate}
                        setStartDate={setStartDate}
                        endDate={endDate}
                        setEndDate={setEndDate}
                      />
                      <p
                        className="md:text-lg text-black text-sm relative top-5 font-normal"
                        n
                      >
                        {item.price}/Per Day
                      </p>
                      <Toaster
                        className="absolute  md:bottom-0 "
                        position="bottom-left"
                      />
                      <button
                        type="button"
                        class="text-white mt-[2rem] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                       focus:ring-blue-300 font-medium rounded-lg  text-sm px-3 py-2.5  pl-4 text-center inline-flex
                        items-center dark:bg-blue-600 w-[12rem] md:w-full dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => {
                          addToCart();
                        }}
                      >
                        Add to Cart
                        <svg
                          class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
